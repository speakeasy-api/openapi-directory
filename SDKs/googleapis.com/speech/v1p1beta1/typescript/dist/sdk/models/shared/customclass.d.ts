import { SpeakeasyBase } from "../../../internal/utils";
import { ClassItem } from "./classitem";
/**
 * A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
 */
export declare class CustomClass extends SpeakeasyBase {
    /**
     * If this custom class is a resource, the custom_class_id is the resource id of the CustomClass. Case sensitive.
     */
    customClassId?: string;
    /**
     * A collection of class items.
     */
    items?: ClassItem[];
    /**
     * The resource name of the custom class.
     */
    name?: string;
}
