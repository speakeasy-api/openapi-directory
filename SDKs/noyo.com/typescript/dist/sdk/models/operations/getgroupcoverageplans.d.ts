import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupCoveragePlansRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the group coverage.
     */
    groupCoverageId: string;
}
export declare class GetGroupCoveragePlansResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns all matching Coverage Plans
     */
    paginatedCoveragePlanResult?: shared.PaginatedCoveragePlanResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
