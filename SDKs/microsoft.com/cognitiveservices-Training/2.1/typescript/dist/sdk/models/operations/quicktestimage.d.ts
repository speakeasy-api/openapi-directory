import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QuickTestImageRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class QuickTestImageRequestBody extends SpeakeasyBase {
    imageData: QuickTestImageRequestBodyImageData;
}
export declare class QuickTestImageRequest extends SpeakeasyBase {
    requestBody: QuickTestImageRequestBody;
    trainingKey: string;
    /**
     * Optional. Specifies the id of a particular iteration to evaluate against.
     *
     * @remarks
     *             The default iteration for the project will be used when not specified.
     */
    iterationId?: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class QuickTestImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    imagePrediction?: shared.ImagePrediction;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
