import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupCoveragePlansPathParams extends SpeakeasyBase {
    groupCoverageId: string;
}
export declare class GetGroupCoveragePlansRequest extends SpeakeasyBase {
    pathParams: GetGroupCoveragePlansPathParams;
}
export declare class GetGroupCoveragePlansResponse extends SpeakeasyBase {
    contentType: string;
    paginatedCoveragePlanResult?: shared.PaginatedCoveragePlanResult;
    statusCode: number;
}
