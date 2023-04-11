import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QuickTestImageUrlFormRequest extends SpeakeasyBase {
    /**
     * An ImageUrl that contains the url of the image to be evaluated.
     */
    imageUrl: shared.ImageUrl;
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * Optional. Specifies the id of a particular iteration to evaluate against.
     *
     * @remarks
     *             The default iteration for the project will be used when not specified.
     */
    iterationId?: string;
    /**
     * The project to evaluate against.
     */
    projectId: string;
    /**
     * Optional. Specifies whether or not to store the result of this prediction. The default is true, to store.
     */
    store?: boolean;
}
export declare class QuickTestImageUrlFormResponse extends SpeakeasyBase {
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
