import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApplicationGroupCoveragesPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetApplicationGroupCoveragesQueryParams extends SpeakeasyBase {
    offset?: number;
    pageSize?: number;
}
export declare class GetApplicationGroupCoveragesRequest extends SpeakeasyBase {
    pathParams: GetApplicationGroupCoveragesPathParams;
    queryParams: GetApplicationGroupCoveragesQueryParams;
}
export declare class GetApplicationGroupCoveragesResponse extends SpeakeasyBase {
    contentType: string;
    paginatedGroupCoverageResult?: shared.PaginatedGroupCoverageResult;
    statusCode: number;
}
