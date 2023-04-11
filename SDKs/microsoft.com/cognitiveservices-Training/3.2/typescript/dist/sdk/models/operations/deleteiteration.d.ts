import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteIterationRequest extends SpeakeasyBase {
    /**
     * The iteration id.
     */
    iterationId: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class DeleteIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
