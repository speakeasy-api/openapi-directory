import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1TagField, GoogleCloudDatacatalogV1beta1TagFieldInput } from "./googleclouddatacatalogv1beta1tagfield";
/**
 * Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
 */
export declare class GoogleCloudDatacatalogV1beta1Tag extends SpeakeasyBase {
    /**
     * Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an individual column based on that schema. For attaching a tag to a nested column, use `.` to separate the column names. Example: * `outer_column.inner_column`
     */
    column?: string;
    /**
     * Required. This maps the ID of a tag field to the value of and additional information about that field. Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.
     */
    fields?: Record<string, GoogleCloudDatacatalogV1beta1TagField>;
    /**
     * The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
     */
    name?: string;
    /**
     * Required. The resource name of the tag template that this tag uses. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} This field cannot be modified after creation.
     */
    template?: string;
    /**
     * Output only. The display name of the tag template.
     */
    templateDisplayName?: string;
}
/**
 * Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
 */
export declare class GoogleCloudDatacatalogV1beta1TagInput extends SpeakeasyBase {
    /**
     * Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an individual column based on that schema. For attaching a tag to a nested column, use `.` to separate the column names. Example: * `outer_column.inner_column`
     */
    column?: string;
    /**
     * Required. This maps the ID of a tag field to the value of and additional information about that field. Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.
     */
    fields?: Record<string, GoogleCloudDatacatalogV1beta1TagFieldInput>;
    /**
     * The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
     */
    name?: string;
    /**
     * Required. The resource name of the tag template that this tag uses. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} This field cannot be modified after creation.
     */
    template?: string;
}
