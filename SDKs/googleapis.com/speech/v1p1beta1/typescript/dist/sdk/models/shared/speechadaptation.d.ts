import { SpeakeasyBase } from "../../../internal/utils";
import { ABNFGrammar } from "./abnfgrammar";
import { CustomClass } from "./customclass";
import { PhraseSet } from "./phraseset";
/**
 * Speech adaptation configuration.
 */
export declare class SpeechAdaptation extends SpeakeasyBase {
    abnfGrammar?: ABNFGrammar;
    /**
     * A collection of custom classes. To specify the classes inline, leave the class' `name` blank and fill in the rest of its fields, giving it a unique `custom_class_id`. Refer to the inline defined class in phrase hints by its `custom_class_id`.
     */
    customClasses?: CustomClass[];
    /**
     * A collection of phrase set resource names to use.
     */
    phraseSetReferences?: string[];
    /**
     * A collection of phrase sets. To specify the hints inline, leave the phrase set's `name` blank and fill in the rest of its fields. Any phrase set can use any custom class.
     */
    phraseSets?: PhraseSet[];
}
