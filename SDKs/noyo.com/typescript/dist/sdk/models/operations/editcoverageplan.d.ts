import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditCoveragePlanRequest extends SpeakeasyBase {
    coveragePlanEditRequest: shared.CoveragePlanEditRequest;
    /**
     * The unique identifier of the coverage plan in Noyo
     */
    planId: string;
    /**
     * The current version identifier of the coverage plan
     */
    version: string;
}
export declare class EditCoveragePlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the modified Coverage Plan
     */
    coveragePlanResult?: shared.CoveragePlanResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
