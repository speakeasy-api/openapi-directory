import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DetectObjectsResponse extends SpeakeasyBase {
    /**
     * Error response.
     */
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    /**
     * The response include the detected objects in JSON format.
     */
    detectResult?: shared.DetectResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
