import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishIterationRequest extends SpeakeasyBase {
    /**
     * The iteration id.
     */
    iterationId: string;
    /**
     * The id of the prediction resource to publish to.
     */
    predictionId: string;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * The name to give the published iteration.
     */
    publishName: string;
}
export declare class PublishIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    publishIteration200ApplicationJSONBoolean?: boolean;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
