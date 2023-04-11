import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON that contains parameters that specify how the model is created
 */
export declare class V2LanguageTrainParams extends SpeakeasyBase {
    /**
     * Lets you specify the ratio of data used to train the dataset and the data used to test the model.
     */
    trainSplitRatio?: number;
    /**
     * Lets you specify that feedback examples are included in the data to be trained to create the model.
     */
    withFeedback?: boolean;
    /**
     * Lets you specify that a global dataset is used in addition to the specified dataset to create the model.
     */
    withGlobalDatasetId?: number;
}
