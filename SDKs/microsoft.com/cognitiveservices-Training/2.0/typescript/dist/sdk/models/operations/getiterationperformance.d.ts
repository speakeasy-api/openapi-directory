import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIterationPerformanceRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The id of the iteration to get
     */
    iterationId: string;
    /**
     * If applicable, the bounding box overlap threshold used to determine true predictions
     */
    overlapThreshold?: number;
    /**
     * The id of the project the iteration belongs to
     */
    projectId: string;
    /**
     * The threshold used to determine true predictions
     */
    threshold?: number;
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
