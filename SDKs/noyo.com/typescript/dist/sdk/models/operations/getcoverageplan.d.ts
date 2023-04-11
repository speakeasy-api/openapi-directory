import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCoveragePlanRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the coverage plan in Noyo
     */
    planId: string;
}
export declare class GetCoveragePlanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns a single Coverage Plan
     */
    coveragePlanResult?: shared.CoveragePlanResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
