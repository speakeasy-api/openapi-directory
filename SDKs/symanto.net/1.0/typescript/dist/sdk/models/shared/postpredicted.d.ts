import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
export declare class PostPredicted extends SpeakeasyBase {
    /**
     * id of the post.
     */
    id?: string;
    /**
     * the list of predictions.
     */
    predictions: Prediction[];
}
