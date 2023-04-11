import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TrainSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class TrainRequestBody extends SpeakeasyBase {
    /**
     * Algorithm used for train
     */
    algorithm?: string;
    /**
     * ID of the dataset to train.
     */
    datasetId?: number;
    /**
     * Number of training iterations for the neural network. Optional.
     */
    epochs?: number;
    /**
     * N/A for intent or sentiment models.
     */
    learningRate?: number;
    /**
     * Name of the model. Maximum length is 180 characters.
     */
    name?: string;
    /**
     * JSON that contains parameters that specify how the model is created
     */
    trainParams?: shared.V2LanguageTrainParams;
}
export declare class TrainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Training Status
     */
    trainResponse?: shared.TrainResponse;
}
