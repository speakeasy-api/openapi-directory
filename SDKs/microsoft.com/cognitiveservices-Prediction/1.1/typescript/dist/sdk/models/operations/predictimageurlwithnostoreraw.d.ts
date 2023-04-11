import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PredictImageUrlWithNoStoreRawRequest extends SpeakeasyBase {
    predictionKey: string;
    /**
     * An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated
     */
    requestBody: Uint8Array;
    /**
     * Optional. Specifies the name of application using the endpoint
     */
    application?: string;
    /**
     * Optional. Specifies the id of a particular iteration to evaluate against.
     *
     * @remarks
     *             The default iteration for the project will be used when not specified
     */
    iterationId?: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class PredictImageUrlWithNoStoreRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    imagePredictionResultModel?: shared.ImagePredictionResultModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
