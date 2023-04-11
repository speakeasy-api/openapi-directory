import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrainSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class RetrainRequestBody extends SpeakeasyBase {
    /**
     * Algorithm used for train
     */
    algorithm?: string;
    /**
     * Number of training iterations for the neural network. Optional.
     */
    epochs?: number;
    /**
     * N/A for intent or sentiment models.
     */
    learningRate?: number;
    /**
     * ID of the model to be updated from the training.
     */
    modelId?: string;
    /**
     * JSON that contains parameters that specify how the model is created
     */
    trainParams?: shared.V2LanguageTrainParams;
}
export declare class RetrainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Training Status
     */
    trainResponse?: shared.TrainResponse;
}
