import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApplicationAgentsPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetApplicationAgentsQueryParams extends SpeakeasyBase {
    offset?: number;
    pageSize?: number;
}
export declare class GetApplicationAgentsRequest extends SpeakeasyBase {
    pathParams: GetApplicationAgentsPathParams;
    queryParams: GetApplicationAgentsQueryParams;
}
export declare class GetApplicationAgentsResponse extends SpeakeasyBase {
    contentType: string;
    paginatedAgentResult?: shared.PaginatedAgentResult;
    statusCode: number;
}
