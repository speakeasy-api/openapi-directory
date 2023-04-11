import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCoveragePlanRequest extends SpeakeasyBase {
    coveragePlanCreateRequest: shared.CoveragePlanCreateRequest;
    /**
     * The unique identifier of the group coverage in Noyo
     */
    groupCoverageId: string;
}
export declare class CreateCoveragePlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the new Coverage Plan
     */
    coveragePlanResult?: shared.CoveragePlanResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
