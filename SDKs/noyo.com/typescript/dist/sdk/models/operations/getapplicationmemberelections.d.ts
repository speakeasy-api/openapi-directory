import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApplicationMemberElectionsPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetApplicationMemberElectionsQueryParams extends SpeakeasyBase {
    offset?: number;
    pageSize?: number;
}
export declare class GetApplicationMemberElectionsRequest extends SpeakeasyBase {
    pathParams: GetApplicationMemberElectionsPathParams;
    queryParams: GetApplicationMemberElectionsQueryParams;
}
export declare class GetApplicationMemberElectionsResponse extends SpeakeasyBase {
    contentType: string;
    paginatedMemberElectionResult?: shared.PaginatedMemberElectionResult;
    statusCode: number;
}
