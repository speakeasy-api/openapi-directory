import { SpeakeasyBase } from "../../../internal/utils";
import { RolloutPolicy } from "./rolloutpolicy";
/**
 * The deprecation state of this resource. This can be ACTIVE, DEPRECATED, OBSOLETE, or DELETED. Operations which communicate the end of life date for an image, can use ACTIVE. Operations which create a new resource using a DEPRECATED resource will return successfully, but with a warning indicating the deprecated resource and recommending its replacement. Operations which use OBSOLETE or DELETED resources will be rejected and result in an error.
 */
export declare enum DeprecationStatusStateEnum {
    Active = "ACTIVE",
    Deleted = "DELETED",
    Deprecated = "DEPRECATED",
    Obsolete = "OBSOLETE"
}
/**
 * Deprecation status for a public resource.
 */
export declare class DeprecationStatus extends SpeakeasyBase {
    /**
     * An optional RFC3339 timestamp on or after which the state of this resource is intended to change to DELETED. This is only informational and the status will not change unless the client explicitly changes it.
     */
    deleted?: string;
    /**
     * An optional RFC3339 timestamp on or after which the state of this resource is intended to change to DEPRECATED. This is only informational and the status will not change unless the client explicitly changes it.
     */
    deprecated?: string;
    /**
     * An optional RFC3339 timestamp on or after which the state of this resource is intended to change to OBSOLETE. This is only informational and the status will not change unless the client explicitly changes it.
     */
    obsolete?: string;
    /**
     * The URL of the suggested replacement for a deprecated resource. The suggested replacement resource must be the same kind of resource as the deprecated resource.
     */
    replacement?: string;
    /**
     * The deprecation state of this resource. This can be ACTIVE, DEPRECATED, OBSOLETE, or DELETED. Operations which communicate the end of life date for an image, can use ACTIVE. Operations which create a new resource using a DEPRECATED resource will return successfully, but with a warning indicating the deprecated resource and recommending its replacement. Operations which use OBSOLETE or DELETED resources will be rejected and result in an error.
     */
    state?: DeprecationStatusStateEnum;
    /**
     * A rollout policy configuration.
     */
    stateOverride?: RolloutPolicy;
}
