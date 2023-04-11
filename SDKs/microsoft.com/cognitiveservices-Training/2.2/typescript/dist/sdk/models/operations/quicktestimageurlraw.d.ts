import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QuickTestImageUrlRawRequest extends SpeakeasyBase {
    /**
     * An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated.
     */
    requestBody: Uint8Array;
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
}
export declare class QuickTestImageUrlRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    imagePrediction?: shared.ImagePrediction;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
