import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIterationPerformanceRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The id of the trained iteration
     */
    iterationId: string;
    /**
     * The project id
     */
    projectId: string;
    /**
     * The 0 to 1 threshold to determine positive prediction
     */
    threshold: number;
}
export declare class GetIterationPerformanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    iterationPerformance?: shared.IterationPerformance;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
