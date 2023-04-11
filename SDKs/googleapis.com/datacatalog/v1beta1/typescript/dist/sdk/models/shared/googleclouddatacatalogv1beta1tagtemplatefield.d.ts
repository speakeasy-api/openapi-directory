import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1FieldType } from "./googleclouddatacatalogv1beta1fieldtype";
/**
 * The template for an individual field within a tag template.
 */
export declare class GoogleCloudDatacatalogV1beta1TagTemplateField extends SpeakeasyBase {
    /**
     * The description for this field. Defaults to an empty string.
     */
    description?: string;
    /**
     * The display name for this field. Defaults to an empty string.
     */
    displayName?: string;
    /**
     * Whether this is a required field. Defaults to false.
     */
    isRequired?: boolean;
    /**
     * Output only. The resource name of the tag template field in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template}/fields/{field} Note that this TagTemplateField may not actually be stored in the location in this name.
     */
    name?: string;
    /**
     * The order of this field with respect to other fields in this tag template. A higher value indicates a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential.
     */
    order?: number;
    type?: GoogleCloudDatacatalogV1beta1FieldType;
}
/**
 * The template for an individual field within a tag template.
 */
export declare class GoogleCloudDatacatalogV1beta1TagTemplateFieldInput extends SpeakeasyBase {
    /**
     * The description for this field. Defaults to an empty string.
     */
    description?: string;
    /**
     * The display name for this field. Defaults to an empty string.
     */
    displayName?: string;
    /**
     * Whether this is a required field. Defaults to false.
     */
    isRequired?: boolean;
    /**
     * The order of this field with respect to other fields in this tag template. A higher value indicates a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential.
     */
    order?: number;
    type?: GoogleCloudDatacatalogV1beta1FieldType;
}
