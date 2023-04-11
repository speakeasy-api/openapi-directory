import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Retrain1Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class Retrain1RequestBody extends SpeakeasyBase {
    /**
     * Specifies the algorithm used to train the dataset. Optional. Use this parameter only when training a dataset with a type of image-detection. Valid values are object-detection-v1 and retail-execution.
     */
    algorithm?: string;
    /**
     * Number of training iterations for the neural network. Optional.
     */
    epochs?: number;
    /**
     * Specifies how much the gradient affects the optimization of the model at each time step. Optional.
     */
    learningRate?: number;
    /**
     * ID of the model to be updated from the training.
     */
    modelId?: string;
    /**
     * JSON that contains parameters that specify how the model is created
     */
    trainParams?: shared.V2VisionTrainParams;
}
export declare class Retrain1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Training Status
     */
    trainResponse?: shared.TrainResponse;
}
