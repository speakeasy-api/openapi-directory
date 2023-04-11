import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnpublishIterationRequest extends SpeakeasyBase {
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * The iteration id.
     */
    iterationId: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class UnpublishIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
