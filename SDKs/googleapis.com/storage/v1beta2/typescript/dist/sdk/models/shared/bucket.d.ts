import { SpeakeasyBase } from "../../../internal/utils";
import { BucketAccessControl } from "./bucketaccesscontrol";
import { ObjectAccessControl } from "./objectaccesscontrol";
export declare class BucketCors extends SpeakeasyBase {
    /**
     * The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses.
     */
    maxAgeSeconds?: number;
    /**
     * The list of HTTP methods on which to include CORS response headers: GET, OPTIONS, POST, etc. Note, "*" is permitted in the list of methods, and means "any method".
     */
    method?: string[];
    /**
     * The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin".
     */
    origin?: string[];
    /**
     * The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
     */
    responseHeader?: string[];
}
/**
 * The action to take.
 */
export declare class BucketLifecycleRuleAction extends SpeakeasyBase {
    /**
     * Type of the action. Currently only Delete is supported.
     */
    type?: string;
}
/**
 * The condition(s) under which the action will be taken.
 */
export declare class BucketLifecycleRuleCondition extends SpeakeasyBase {
    /**
     * Age of an object (in days). This condition is satisfied when an object reaches the specified age.
     */
    age?: number;
    /**
     * A date in RFC 3339 format with only the date part, e.g. "2013-01-15". This condition is satisfied when an object is created before midnight of the specified date in UTC.
     */
    createdBefore?: Date;
    /**
     * Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects.
     */
    isLive?: boolean;
    /**
     * Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object.
     */
    numNewerVersions?: number;
}
export declare class BucketLifecycleRule extends SpeakeasyBase {
    /**
     * The action to take.
     */
    action?: BucketLifecycleRuleAction;
    /**
     * The condition(s) under which the action will be taken.
     */
    condition?: BucketLifecycleRuleCondition;
}
/**
 * The bucket's lifecycle configuration. See object lifecycle management for more information.
 */
export declare class BucketLifecycle extends SpeakeasyBase {
    /**
     * A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.
     */
    rule?: BucketLifecycleRule[];
}
/**
 * The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
 */
export declare class BucketLogging extends SpeakeasyBase {
    /**
     * The destination bucket where the current bucket's logs should be placed.
     */
    logBucket?: string;
    /**
     * A prefix for log object names.
     */
    logObjectPrefix?: string;
}
/**
 * The owner of the bucket. This is always the project team's owner group.
 */
export declare class BucketOwner extends SpeakeasyBase {
    /**
     * The entity, in the form group-groupId.
     */
    entity?: string;
    /**
     * The ID for the entity.
     */
    entityId?: string;
}
/**
 * The bucket's versioning configuration.
 */
export declare class BucketVersioning extends SpeakeasyBase {
    /**
     * While set to true, versioning is fully enabled for this bucket.
     */
    enabled?: boolean;
}
/**
 * The bucket's website configuration.
 */
export declare class BucketWebsite extends SpeakeasyBase {
    /**
     * Behaves as the bucket's directory index where missing objects are treated as potential directories.
     */
    mainPageSuffix?: string;
    /**
     * The custom object to return when a requested resource is not found.
     */
    notFoundPage?: string;
}
/**
 * A bucket.
 */
export declare class Bucket extends SpeakeasyBase {
    /**
     * Access controls on the bucket.
     */
    acl?: BucketAccessControl[];
    /**
     * The bucket's Cross-Origin Resource Sharing (CORS) configuration.
     */
    cors?: BucketCors[];
    /**
     * Default access controls to apply to new objects when no ACL is provided.
     */
    defaultObjectAcl?: ObjectAccessControl[];
    /**
     * HTTP 1.1 Entity tag for the bucket.
     */
    etag?: string;
    /**
     * The ID of the bucket.
     */
    id?: string;
    /**
     * The kind of item this is. For buckets, this is always storage#bucket.
     */
    kind?: string;
    /**
     * The bucket's lifecycle configuration. See object lifecycle management for more information.
     */
    lifecycle?: BucketLifecycle;
    /**
     * The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Typical values are US and EU. Defaults to US. See the developer's guide for the authoritative list.
     */
    location?: string;
    /**
     * The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
     */
    logging?: BucketLogging;
    /**
     * The metadata generation of this bucket.
     */
    metageneration?: string;
    /**
     * The name of the bucket.
     */
    name?: string;
    /**
     * The owner of the bucket. This is always the project team's owner group.
     */
    owner?: BucketOwner;
    /**
     * The URI of this bucket.
     */
    selfLink?: string;
    /**
     * The bucket's storage class. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Typical values are STANDARD and DURABLE_REDUCED_AVAILABILITY. Defaults to STANDARD. See the developer's guide for the authoritative list.
     */
    storageClass?: string;
    /**
     * Creation time of the bucket in RFC 3339 format.
     */
    timeCreated?: Date;
    /**
     * The bucket's versioning configuration.
     */
    versioning?: BucketVersioning;
    /**
     * The bucket's website configuration.
     */
    website?: BucketWebsite;
}
