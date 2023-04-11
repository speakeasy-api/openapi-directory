import { SpeakeasyBase } from "../../../internal/utils";
import { CustomClass } from "./customclass";
/**
 * Message sent by the client for the `CreateCustomClass` method.
 */
export declare class CreateCustomClassRequest extends SpeakeasyBase {
    /**
     * A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
     */
    customClass?: CustomClass;
    /**
     * Required. The ID to use for the custom class, which will become the final component of the custom class' resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.
     */
    customClassId?: string;
}
