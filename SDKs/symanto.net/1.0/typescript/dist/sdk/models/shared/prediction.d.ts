import { SpeakeasyBase } from "../../../internal/utils";
export declare class Prediction extends SpeakeasyBase {
    /**
     * the predicted label.
     */
    prediction: string;
    /**
     * the probability of the predicted label.
     */
    probability: number;
}
