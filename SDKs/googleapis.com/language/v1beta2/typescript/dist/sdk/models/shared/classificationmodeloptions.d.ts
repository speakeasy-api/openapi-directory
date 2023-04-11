import { SpeakeasyBase } from "../../../internal/utils";
import { V2Model } from "./v2model";
/**
 * Model options available for classification requests.
 */
export declare class ClassificationModelOptions extends SpeakeasyBase {
    /**
     * Options for the V1 model.
     */
    v1Model?: Record<string, any>;
    /**
     * Options for the V2 model.
     */
    v2Model?: V2Model;
}
