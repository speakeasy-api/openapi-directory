import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies.
 */
export declare class TagValueInput extends SpeakeasyBase {
    /**
     * Optional. User-assigned description of the TagValue. Must not exceed 256 characters. Read-write.
     */
    description?: string;
    /**
     * Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagValueRequest for details.
     */
    etag?: string;
    /**
     * Immutable. Resource name for TagValue in the format `tagValues/456`.
     */
    name?: string;
    /**
     * Immutable. The resource name of the new TagValue's parent TagKey. Must be of the form `tagKeys/{tag_key_id}`.
     */
    parent?: string;
    /**
     * Required. Immutable. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent TagKey. The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    shortName?: string;
}
/**
 * A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies.
 */
export declare class TagValue extends SpeakeasyBase {
    /**
     * Output only. Creation time.
     */
    createTime?: string;
    /**
     * Optional. User-assigned description of the TagValue. Must not exceed 256 characters. Read-write.
     */
    description?: string;
    /**
     * Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagValueRequest for details.
     */
    etag?: string;
    /**
     * Immutable. Resource name for TagValue in the format `tagValues/456`.
     */
    name?: string;
    /**
     * Output only. Namespaced name of the TagValue. Now only supported in the format `{organization_id}/{tag_key_short_name}/{short_name}`. Other formats will be supported when we add non-org parented tags.
     */
    namespacedName?: string;
    /**
     * Immutable. The resource name of the new TagValue's parent TagKey. Must be of the form `tagKeys/{tag_key_id}`.
     */
    parent?: string;
    /**
     * Required. Immutable. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent TagKey. The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    shortName?: string;
    /**
     * Output only. Update time.
     */
    updateTime?: string;
}
