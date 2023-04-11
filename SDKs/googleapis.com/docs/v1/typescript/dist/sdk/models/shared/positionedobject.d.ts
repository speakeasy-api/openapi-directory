import { SpeakeasyBase } from "../../../internal/utils";
import { PositionedObjectProperties } from "./positionedobjectproperties";
import { SuggestedPositionedObjectProperties } from "./suggestedpositionedobjectproperties";
/**
 * An object that's tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject contains an EmbeddedObject such as an image.
 */
export declare class PositionedObject extends SpeakeasyBase {
    /**
     * The ID of this positioned object.
     */
    objectId?: string;
    /**
     * Properties of a PositionedObject.
     */
    positionedObjectProperties?: PositionedObjectProperties;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[];
    /**
     * The suggested insertion ID. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionId?: string;
    /**
     * The suggested changes to the positioned object properties, keyed by suggestion ID.
     */
    suggestedPositionedObjectPropertiesChanges?: Record<string, SuggestedPositionedObjectProperties>;
}
