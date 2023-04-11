import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag. A purpose does not grant a policy engine exclusive rights to the Tag, and it may be referenced by other policy engines. A purpose cannot be changed once set.
 */
export declare enum TagKeyPurposeEnum {
    PurposeUnspecified = "PURPOSE_UNSPECIFIED",
    GceFirewall = "GCE_FIREWALL"
}
/**
 * A TagKey, used to group a set of TagValues.
 */
export declare class TagKey extends SpeakeasyBase {
    /**
     * Output only. Creation time.
     */
    createTime?: string;
    /**
     * Optional. User-assigned description of the TagKey. Must not exceed 256 characters. Read-write.
     */
    description?: string;
    /**
     * Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagKeyRequest for details.
     */
    etag?: string;
    /**
     * Immutable. The resource name for a TagKey. Must be in the format `tagKeys/{tag_key_id}`, where `tag_key_id` is the generated numeric id for the TagKey.
     */
    name?: string;
    /**
     * Output only. Immutable. Namespaced name of the TagKey.
     */
    namespacedName?: string;
    /**
     * Immutable. The resource name of the new TagKey's parent. Must be of the form `organizations/{org_id}`.
     */
    parent?: string;
    /**
     * Optional. A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag. A purpose does not grant a policy engine exclusive rights to the Tag, and it may be referenced by other policy engines. A purpose cannot be changed once set.
     */
    purpose?: TagKeyPurposeEnum;
    /**
     * Optional. Purpose data corresponds to the policy system that the tag is intended for. See documentation for `Purpose` for formatting of this field. Purpose data cannot be changed once set.
     */
    purposeData?: Record<string, string>;
    /**
     * Required. Immutable. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace. The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    shortName?: string;
    /**
     * Output only. Update time.
     */
    updateTime?: string;
}
/**
 * A TagKey, used to group a set of TagValues.
 */
export declare class TagKeyInput extends SpeakeasyBase {
    /**
     * Optional. User-assigned description of the TagKey. Must not exceed 256 characters. Read-write.
     */
    description?: string;
    /**
     * Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagKeyRequest for details.
     */
    etag?: string;
    /**
     * Immutable. The resource name for a TagKey. Must be in the format `tagKeys/{tag_key_id}`, where `tag_key_id` is the generated numeric id for the TagKey.
     */
    name?: string;
    /**
     * Immutable. The resource name of the new TagKey's parent. Must be of the form `organizations/{org_id}`.
     */
    parent?: string;
    /**
     * Optional. A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag. A purpose does not grant a policy engine exclusive rights to the Tag, and it may be referenced by other policy engines. A purpose cannot be changed once set.
     */
    purpose?: TagKeyPurposeEnum;
    /**
     * Optional. Purpose data corresponds to the policy system that the tag is intended for. See documentation for `Purpose` for formatting of this field. Purpose data cannot be changed once set.
     */
    purposeData?: Record<string, string>;
    /**
     * Required. Immutable. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace. The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    shortName?: string;
}
