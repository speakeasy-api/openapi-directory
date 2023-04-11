import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUntaggedImageCountRequest extends SpeakeasyBase {
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * The iteration id. Defaults to workspace.
     */
    iterationId?: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class GetUntaggedImageCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    getUntaggedImageCount200ApplicationJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
