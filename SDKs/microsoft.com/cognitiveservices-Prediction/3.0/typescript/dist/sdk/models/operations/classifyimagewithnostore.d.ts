import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClassifyImageWithNoStoreRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class ClassifyImageWithNoStoreRequestBody extends SpeakeasyBase {
    /**
     * Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 0MB.
     */
    imageData: ClassifyImageWithNoStoreRequestBodyImageData;
}
export declare class ClassifyImageWithNoStoreRequest extends SpeakeasyBase {
    requestBody: ClassifyImageWithNoStoreRequestBody;
    /**
     * Optional. Specifies the name of application using the endpoint.
     */
    application?: string;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * Specifies the name of the model to evaluate against.
     */
    publishedName: string;
}
export declare class ClassifyImageWithNoStoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    imagePrediction?: shared.ImagePrediction;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
