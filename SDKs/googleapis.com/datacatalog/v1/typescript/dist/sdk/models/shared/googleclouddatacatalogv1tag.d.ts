import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1TagField, GoogleCloudDatacatalogV1TagFieldInput } from "./googleclouddatacatalogv1tagfield";
/**
 * Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
 */
export declare class GoogleCloudDatacatalogV1Tag extends SpeakeasyBase {
    /**
     * Resources like entry can have schemas associated with them. This scope allows you to attach tags to an individual column based on that schema. To attach a tag to a nested column, separate column names with a dot (`.`). Example: `column.nested_column`.
     */
    column?: string;
    /**
     * Required. Maps the ID of a tag field to its value and additional information about that field. Tag template defines valid field IDs. A tag must have at least 1 field and at most 500 fields.
     */
    fields?: Record<string, GoogleCloudDatacatalogV1TagField>;
    /**
     * The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name.
     */
    name?: string;
    /**
     * Required. The resource name of the tag template this tag uses. Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE_ID}` This field cannot be modified after creation.
     */
    template?: string;
    /**
     * Output only. The display name of the tag template.
     */
    templateDisplayName?: string;
}
/**
 * Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
 */
export declare class GoogleCloudDatacatalogV1TagInput extends SpeakeasyBase {
    /**
     * Resources like entry can have schemas associated with them. This scope allows you to attach tags to an individual column based on that schema. To attach a tag to a nested column, separate column names with a dot (`.`). Example: `column.nested_column`.
     */
    column?: string;
    /**
     * Required. Maps the ID of a tag field to its value and additional information about that field. Tag template defines valid field IDs. A tag must have at least 1 field and at most 500 fields.
     */
    fields?: Record<string, GoogleCloudDatacatalogV1TagFieldInput>;
    /**
     * The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name.
     */
    name?: string;
    /**
     * Required. The resource name of the tag template this tag uses. Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE_ID}` This field cannot be modified after creation.
     */
    template?: string;
}
