import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAgentLocationsPathParams extends SpeakeasyBase {
    agentId: string;
}
export declare class GetAgentLocationsQueryParams extends SpeakeasyBase {
    offset?: number;
    pageSize?: number;
}
export declare class GetAgentLocationsRequest extends SpeakeasyBase {
    pathParams: GetAgentLocationsPathParams;
    queryParams: GetAgentLocationsQueryParams;
}
export declare class GetAgentLocationsResponse extends SpeakeasyBase {
    contentType: string;
    paginatedAgentLocationResult?: shared.PaginatedAgentLocationResult;
    statusCode: number;
}
