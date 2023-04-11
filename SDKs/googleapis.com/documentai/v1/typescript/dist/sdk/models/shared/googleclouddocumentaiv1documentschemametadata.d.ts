import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata for global schema behavior.
 */
export declare class GoogleCloudDocumentaiV1DocumentSchemaMetadata extends SpeakeasyBase {
    /**
     * If true, on a given page, there can be multiple `document` annotations covering it.
     */
    documentAllowMultipleLabels?: boolean;
    /**
     * If true, a `document` entity type can be applied to subdocument ( splitting). Otherwise, it can only be applied to the entire document (classification).
     */
    documentSplitter?: boolean;
    /**
     * If set, all the nested entities must be prefixed with the parents.
     */
    prefixedNamingOnProperties?: boolean;
    /**
     * If set, we will skip the naming format validation in the schema. So the string values in `DocumentSchema.EntityType.name` and `DocumentSchema.EntityType.Property.name` will not be checked.
     */
    skipNamingValidation?: boolean;
}
