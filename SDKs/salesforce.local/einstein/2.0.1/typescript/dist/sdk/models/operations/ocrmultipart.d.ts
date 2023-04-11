import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OcrMultipartSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class OcrMultipartRequestBodySampleContent extends SpeakeasyBase {
    content: Uint8Array;
    sampleContent: string;
}
export declare class OcrMultipartRequestBody extends SpeakeasyBase {
    /**
     * ID of the model that makes the prediction. Valid values are OCRModel and tabulatev2.
     */
    modelId?: string;
    /**
     * Binary content of image file uploaded as multipart/form-data. Optional.
     */
    sampleContent?: OcrMultipartRequestBodySampleContent;
    /**
     * String that you can pass in to tag the prediction. Optional. Can be any value, and is returned in the response.
     */
    sampleId?: string;
    /**
     * URL of the image file. Use this parameter when sending in a file from a web location. Optional.
     */
    sampleLocation?: string;
    /**
     * Optional. Designates the type of data in the image. Default is text. Valid values: contact, table, and text.
     */
    task?: string;
}
export declare class OcrMultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OCR Result
     */
    ocrPredictResponse?: shared.OCRPredictResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
