import { SpeakeasyBase } from "../../../internal/utils";
import { PersonProperties } from "./personproperties";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";
/**
 * A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
 */
export declare class Person extends SpeakeasyBase {
    /**
     * Output only. The unique ID of this link.
     */
    personId?: string;
    /**
     * Properties specific to a linked Person.
     */
    personProperties?: PersonProperties;
    /**
     * IDs for suggestions that remove this person link from the document. A Person might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this person link isn't suggested for deletion.
     */
    suggestedDeletionIds?: string[];
    /**
     * IDs for suggestions that insert this person link into the document. A Person might have multiple insertion IDs if it's a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this person link isn't a suggested insertion.
     */
    suggestedInsertionIds?: string[];
    /**
     * The suggested text style changes to this Person, keyed by suggestion ID.
     */
    suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
    /**
     * Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
     */
    textStyle?: TextStyle;
}
/**
 * A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
 */
export declare class PersonInput extends SpeakeasyBase {
    /**
     * IDs for suggestions that remove this person link from the document. A Person might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this person link isn't suggested for deletion.
     */
    suggestedDeletionIds?: string[];
    /**
     * IDs for suggestions that insert this person link into the document. A Person might have multiple insertion IDs if it's a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this person link isn't a suggested insertion.
     */
    suggestedInsertionIds?: string[];
    /**
     * The suggested text style changes to this Person, keyed by suggestion ID.
     */
    suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
    /**
     * Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
     */
    textStyle?: TextStyle;
}
