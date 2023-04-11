import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationModelOptions } from "./classificationmodeloptions";
import { Document } from "./document";
/**
 * The document classification request message.
 */
export declare class ClassifyTextRequest extends SpeakeasyBase {
    /**
     * Model options available for classification requests.
     */
    classificationModelOptions?: ClassificationModelOptions;
    /**
     * Represents the input to API methods.
     */
    document?: Document;
}
