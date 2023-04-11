import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectAccessControl } from "./objectaccesscontrol";
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
     * The bucket containing this object.
     */
    bucket?: string;
    /**
     * Cache-Control directive for the object data.
     */
    cacheControl?: string;
    /**
     * Number of underlying components that make up this object. Components are accumulated by compose operations and are limited to a count of 32.
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
     * Content-Type of the object data.
     */
    contentType?: string;
    /**
     * CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64.
     */
    crc32c?: string;
    /**
     * HTTP 1.1 Entity tag for the object.
     */
    etag?: string;
    /**
     * The content generation of this object. Used for object versioning.
     */
    generation?: string;
    /**
     * The ID of the object.
     */
    id?: string;
    /**
     * The kind of item this is. For objects, this is always storage#object.
     */
    kind?: string;
    /**
     * MD5 hash of the data; encoded using base64.
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
     * The generation of the metadata for this object at this generation. Used for metadata versioning. Has no meaning outside of the context of this generation.
     */
    metageneration?: string;
    /**
     * The name of this object. Required if not specified by URL parameter.
     */
    name?: string;
    /**
     * The owner of the object. This will always be the uploader of the object.
     */
    owner?: ObjectOwner;
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
     * Deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.
     */
    timeDeleted?: Date;
    /**
     * Modification time of the object metadata in RFC 3339 format.
     */
    updated?: Date;
}
