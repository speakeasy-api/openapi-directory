import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DetectImageUrlWithNoStoreJsonRequest extends SpeakeasyBase {
    /**
     * An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated.
     */
    imageUrl: shared.ImageUrl;
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
export declare class DetectImageUrlWithNoStoreJsonResponse extends SpeakeasyBase {
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
