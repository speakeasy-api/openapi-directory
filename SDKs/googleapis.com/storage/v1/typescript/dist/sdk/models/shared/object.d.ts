import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectAccessControl } from "./objectaccesscontrol";
/**
 * Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
 */
export declare class ObjectCustomerEncryption extends SpeakeasyBase {
    /**
     * The encryption algorithm.
     */
    encryptionAlgorithm?: string;
    /**
     * SHA256 hash value of the encryption key.
     */
    keySha256?: string;
}
/**
 * The owner of the object. This will always be the uploader of the object.
 */
export declare class ObjectOwner extends SpeakeasyBase {
    /**
     * The entity, in the form user-userId.
     */
    entity?: string;
    /**
     * The ID for the entity.
     */
    entityId?: string;
}
/**
 * An object.
 */
export declare class ObjectT extends SpeakeasyBase {
    /**
     * Access controls on the object.
     */
    acl?: ObjectAccessControl[];
    /**
     * The name of the bucket containing this object.
     */
    bucket?: string;
    /**
     * Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.
     */
    cacheControl?: string;
    /**
     * Number of underlying components that make up this object. Components are accumulated by compose operations.
     */
    componentCount?: number;
    /**
     * Content-Disposition of the object data.
     */
    contentDisposition?: string;
    /**
     * Content-Encoding of the object data.
     */
    contentEncoding?: string;
    /**
     * Content-Language of the object data.
     */
    contentLanguage?: string;
    /**
     * Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.
     */
    contentType?: string;
    /**
     * CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices.
     */
    crc32c?: string;
    /**
     * A timestamp in RFC 3339 format specified by the user for an object.
     */
    customTime?: Date;
    /**
     * Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
     */
    customerEncryption?: ObjectCustomerEncryption;
    /**
     * HTTP 1.1 Entity tag for the object.
     */
    etag?: string;
    /**
     * Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false.
     */
    eventBasedHold?: boolean;
    /**
     * The content generation of this object. Used for object versioning.
     */
    generation?: string;
    /**
     * The ID of the object, including the bucket name, object name, and generation number.
     */
    id?: string;
    /**
     * The kind of item this is. For objects, this is always storage#object.
     */
    kind?: string;
    /**
     * Not currently supported. Specifying the parameter causes the request to fail with status code 400 - Bad Request.
     */
    kmsKeyName?: string;
    /**
     * MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.
     */
    md5Hash?: string;
    /**
     * Media download link.
     */
    mediaLink?: string;
    /**
     * User-provided metadata, in key/value pairs.
     */
    metadata?: Record<string, string>;
    /**
     * The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.
     */
    metageneration?: string;
    /**
     * The name of the object. Required if not specified by URL parameter.
     */
    name?: string;
    /**
     * The owner of the object. This will always be the uploader of the object.
     */
    owner?: ObjectOwner;
    /**
     * A server-determined value that specifies the earliest time that the object's retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold).
     */
    retentionExpirationTime?: Date;
    /**
     * The link to this object.
     */
    selfLink?: string;
    /**
     * Content-Length of the data in bytes.
     */
    size?: string;
    /**
     * Storage class of the object.
     */
    storageClass?: string;
    /**
     * Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object.
     */
    temporaryHold?: boolean;
    /**
     * The creation time of the object in RFC 3339 format.
     */
    timeCreated?: Date;
    /**
     * The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.
     */
    timeDeleted?: Date;
    /**
     * The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.
     */
    timeStorageClassUpdated?: Date;
    /**
     * The modification time of the object metadata in RFC 3339 format. Set initially to object creation time and then updated whenever any metadata of the object changes. This includes changes made by a requester, such as modifying custom metadata, as well as changes made by Cloud Storage on behalf of a requester, such as changing the storage class based on an Object Lifecycle Configuration.
     */
    updated?: Date;
}
