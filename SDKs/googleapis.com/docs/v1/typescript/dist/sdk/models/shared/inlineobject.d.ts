import { SpeakeasyBase } from "../../../internal/utils";
import { InlineObjectProperties } from "./inlineobjectproperties";
import { SuggestedInlineObjectProperties } from "./suggestedinlineobjectproperties";
/**
 * An object that appears inline with text. An InlineObject contains an EmbeddedObject such as an image.
 */
export declare class InlineObject extends SpeakeasyBase {
    /**
     * Properties of an InlineObject.
     */
    inlineObjectProperties?: InlineObjectProperties;
    /**
     * The ID of this inline object. Can be used to update an object’s properties.
     */
    objectId?: string;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[];
    /**
     * The suggested changes to the inline object properties, keyed by suggestion ID.
     */
    suggestedInlineObjectPropertiesChanges?: Record<string, SuggestedInlineObjectProperties>;
    /**
     * The suggested insertion ID. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionId?: string;
}
