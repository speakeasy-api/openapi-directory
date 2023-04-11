import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Occurrence type limits the number of instances an entity type appears in the document.
 */
export declare enum GoogleCloudDocumentaiV1DocumentSchemaEntityTypePropertyOccurrenceTypeEnum {
    OccurrenceTypeUnspecified = "OCCURRENCE_TYPE_UNSPECIFIED",
    OptionalOnce = "OPTIONAL_ONCE",
    OptionalMultiple = "OPTIONAL_MULTIPLE",
    RequiredOnce = "REQUIRED_ONCE",
    RequiredMultiple = "REQUIRED_MULTIPLE"
}
/**
 * Defines properties that can be part of the entity type.
 */
export declare class GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty extends SpeakeasyBase {
    /**
     * The name of the property. Follows the same guidelines as the EntityType name.
     */
    name?: string;
    /**
     * Occurrence type limits the number of instances an entity type appears in the document.
     */
    occurrenceType?: GoogleCloudDocumentaiV1DocumentSchemaEntityTypePropertyOccurrenceTypeEnum;
    /**
     * A reference to the value type of the property. This type is subject to the same conventions as the `Entity.base_types` field.
     */
    valueType?: string;
}
