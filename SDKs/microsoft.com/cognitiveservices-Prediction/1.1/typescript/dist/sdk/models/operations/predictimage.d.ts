import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PredictImageRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class PredictImageRequestBody extends SpeakeasyBase {
    imageData: PredictImageRequestBodyImageData;
}
export declare class PredictImageRequest extends SpeakeasyBase {
    predictionKey: string;
    requestBody: PredictImageRequestBody;
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
export declare class PredictImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    imagePredictionResultModel?: shared.ImagePredictionResultModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
