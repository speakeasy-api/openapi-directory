import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template to produce a JSON-style HMAC Key metadata resource.
 */
export declare class HmacKeyMetadata extends SpeakeasyBase {
    /**
     * The ID of the HMAC Key.
     */
    accessId?: string;
    /**
     * HTTP 1.1 Entity tag for the HMAC key.
     */
    etag?: string;
    /**
     * The ID of the HMAC key, including the Project ID and the Access ID.
     */
    id?: string;
    /**
     * The kind of item this is. For HMAC Key metadata, this is always storage#hmacKeyMetadata.
     */
    kind?: string;
    /**
     * Project ID owning the service account to which the key authenticates.
     */
    projectId?: string;
    /**
     * The link to this resource.
     */
    selfLink?: string;
    /**
     * The email address of the key's associated service account.
     */
    serviceAccountEmail?: string;
    /**
     * The state of the key. Can be one of ACTIVE, INACTIVE, or DELETED.
     */
    state?: string;
    /**
     * The creation time of the HMAC key in RFC 3339 format.
     */
    timeCreated?: Date;
    /**
     * The last modification time of the HMAC key metadata in RFC 3339 format.
     */
    updated?: Date;
}
