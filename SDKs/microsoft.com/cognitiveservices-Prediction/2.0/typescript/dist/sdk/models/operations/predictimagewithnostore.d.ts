import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PredictImageWithNoStoreRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class PredictImageWithNoStoreRequestBody extends SpeakeasyBase {
    imageData: PredictImageWithNoStoreRequestBodyImageData;
}
export declare class PredictImageWithNoStoreRequest extends SpeakeasyBase {
    predictionKey: string;
    requestBody: PredictImageWithNoStoreRequestBody;
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
export declare class PredictImageWithNoStoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    imagePrediction?: shared.ImagePrediction;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
