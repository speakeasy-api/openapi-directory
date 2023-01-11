import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCoveragePlanMemberElectionsPathParams extends SpeakeasyBase {
    planId: string;
}
export declare class GetCoveragePlanMemberElectionsQueryParams extends SpeakeasyBase {
    offset?: number;
    pageSize?: number;
}
export declare class GetCoveragePlanMemberElectionsRequest extends SpeakeasyBase {
    pathParams: GetCoveragePlanMemberElectionsPathParams;
    queryParams: GetCoveragePlanMemberElectionsQueryParams;
}
export declare class GetCoveragePlanMemberElectionsResponse extends SpeakeasyBase {
    contentType: string;
    paginatedMemberElectionResult?: shared.PaginatedMemberElectionResult;
    statusCode: number;
}
