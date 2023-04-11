import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RecognizeTextRequest extends SpeakeasyBase {
    /**
     * A JSON document with a URL pointing to the image that is to be analyzed.
     */
    imageUrl: shared.ImageUrl;
    /**
     * Type of text to recognize.
     */
    mode: shared.TextRecognitionModeEnum;
}
export declare class RecognizeTextResponse extends SpeakeasyBase {
    /**
     * Error response.
     */
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
