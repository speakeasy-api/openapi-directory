import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1FieldType } from "./googleclouddatacatalogv1fieldtype";
/**
 * The template for an individual field within a tag template.
 */
export declare class GoogleCloudDatacatalogV1TagTemplateField extends SpeakeasyBase {
    /**
     * The description for this field. Defaults to an empty string.
     */
    description?: string;
    /**
     * The display name for this field. Defaults to an empty string. The name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and can't start or end with spaces. The maximum length is 200 characters.
     */
    displayName?: string;
    /**
     * If true, this field is required. Defaults to false.
     */
    isRequired?: boolean;
    /**
     * Output only. The resource name of the tag template field in URL format. Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE}/fields/{FIELD}` Note: The tag template field itself might not be stored in the location specified in its name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 64 characters.
     */
    name?: string;
    /**
     * The order of this field with respect to other fields in this tag template. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order and field orders within a tag don't have to be sequential.
     */
    order?: number;
    type?: GoogleCloudDatacatalogV1FieldType;
}
/**
 * The template for an individual field within a tag template.
 */
export declare class GoogleCloudDatacatalogV1TagTemplateFieldInput extends SpeakeasyBase {
    /**
     * The description for this field. Defaults to an empty string.
     */
    description?: string;
    /**
     * The display name for this field. Defaults to an empty string. The name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and can't start or end with spaces. The maximum length is 200 characters.
     */
    displayName?: string;
    /**
     * If true, this field is required. Defaults to false.
     */
    isRequired?: boolean;
    /**
     * The order of this field with respect to other fields in this tag template. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order and field orders within a tag don't have to be sequential.
     */
    order?: number;
    type?: GoogleCloudDatacatalogV1FieldType;
}
