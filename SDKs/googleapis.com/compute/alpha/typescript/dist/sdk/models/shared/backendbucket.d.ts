import { SpeakeasyBase } from "../../../internal/utils";
import { BackendBucketCdnPolicy } from "./backendbucketcdnpolicy";
/**
 * Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
 */
export declare enum BackendBucketCompressionModeEnum {
    Automatic = "AUTOMATIC",
    Disabled = "DISABLED"
}
/**
 * Represents a Cloud Storage Bucket resource. This Cloud Storage bucket resource is referenced by a URL map of a load balancer. For more information, read Backend Buckets.
 */
export declare class BackendBucket extends SpeakeasyBase {
    /**
     * Cloud Storage bucket name.
     */
    bucketName?: string;
    /**
     * Message containing Cloud CDN configuration for a backend bucket.
     */
    cdnPolicy?: BackendBucketCdnPolicy;
    /**
     * Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
     */
    compressionMode?: BackendBucketCompressionModeEnum;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * Headers that the HTTP/S load balancer should add to proxied responses.
     */
    customResponseHeaders?: string[];
    /**
     * An optional textual description of the resource; provided by the client when the resource is created.
     */
    description?: string;
    /**
     * [Output Only] The resource URL for the edge security policy associated with this backend bucket.
     */
    edgeSecurityPolicy?: string;
    /**
     * If true, enable Cloud CDN for this BackendBucket.
     */
    enableCdn?: boolean;
    /**
     * [Output Only] Unique identifier for the resource; defined by the server.
     */
    id?: string;
    /**
     * Type of the resource.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
}
