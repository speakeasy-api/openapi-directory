import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QuickTestImageUrlJsonRequest extends SpeakeasyBase {
    /**
     * An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated
     */
    imageUrl: shared.ImageUrl;
    trainingKey: string;
    /**
     * Optional. Specifies the id of a particular iteration to evaluate against.
     *
     * @remarks
     *             The default iteration for the project will be used when not specified.
     */
    iterationId?: string;
    /**
     * The project to evaluate against
     */
    projectId: string;
}
export declare class QuickTestImageUrlJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    imagePredictionResult?: shared.ImagePredictionResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
