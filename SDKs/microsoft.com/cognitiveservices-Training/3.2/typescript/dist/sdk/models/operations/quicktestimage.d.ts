import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QuickTestImageRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class QuickTestImageRequestBody extends SpeakeasyBase {
    /**
     * Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 6MB.
     */
    imageData: QuickTestImageRequestBodyImageData;
}
export declare class QuickTestImageRequest extends SpeakeasyBase {
    requestBody: QuickTestImageRequestBody;
    /**
     * Optional. Specifies the id of a particular iteration to evaluate against.
     *
     * @remarks
     *             The default iteration for the project will be used when not specified.
     */
    iterationId?: string;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * Optional. Specifies whether or not to store the result of this prediction. The default is true, to store.
     */
    store?: boolean;
}
export declare class QuickTestImageResponse extends SpeakeasyBase {
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
