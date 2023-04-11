import { SpeakeasyBase } from "../../../internal/utils";
import { V2Restrictions } from "./v2restrictions";
/**
 * The representation of a key managed by the API Keys API.
 */
export declare class V2KeyInput extends SpeakeasyBase {
    /**
     * Annotations is an unstructured key-value map stored with a policy that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects.
     */
    annotations?: Record<string, string>;
    /**
     * Human-readable display name of this key that you can modify. The maximum length is 63 characters.
     */
    displayName?: string;
    /**
     * Describes the restrictions on the key.
     */
    restrictions?: V2Restrictions;
}
/**
 * The representation of a key managed by the API Keys API.
 */
export declare class V2Key extends SpeakeasyBase {
    /**
     * Annotations is an unstructured key-value map stored with a policy that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects.
     */
    annotations?: Record<string, string>;
    /**
     * Output only. A timestamp identifying the time this key was originally created.
     */
    createTime?: string;
    /**
     * Output only. A timestamp when this key was deleted. If the resource is not deleted, this must be empty.
     */
    deleteTime?: string;
    /**
     * Human-readable display name of this key that you can modify. The maximum length is 63 characters.
     */
    displayName?: string;
    /**
     * Output only. A checksum computed by the server based on the current value of the Key resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. See https://google.aip.dev/154.
     */
    etag?: string;
    /**
     * Output only. An encrypted and signed value held by this key. This field can be accessed only through the `GetKeyString` method.
     */
    keyString?: string;
    /**
     * Output only. The resource name of the key. The `name` has the form: `projects//locations/global/keys/`. For example: `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2` NOTE: Key is a global resource; hence the only supported value for location is `global`.
     */
    name?: string;
    /**
     * Describes the restrictions on the key.
     */
    restrictions?: V2Restrictions;
    /**
     * Output only. Unique id in UUID4 format.
     */
    uid?: string;
    /**
     * Output only. A timestamp identifying the time this key was last updated.
     */
    updateTime?: string;
}
