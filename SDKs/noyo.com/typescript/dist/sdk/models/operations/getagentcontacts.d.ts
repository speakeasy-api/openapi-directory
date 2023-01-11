import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAgentContactsPathParams extends SpeakeasyBase {
    agentId: string;
}
export declare class GetAgentContactsQueryParams extends SpeakeasyBase {
    offset?: number;
    pageSize?: number;
}
export declare class GetAgentContactsRequest extends SpeakeasyBase {
    pathParams: GetAgentContactsPathParams;
    queryParams: GetAgentContactsQueryParams;
}
export declare class GetAgentContactsResponse extends SpeakeasyBase {
    contentType: string;
    paginatedAgentContactResults?: shared.PaginatedAgentContactResults;
    statusCode: number;
}
