import { SpeakeasyBase } from "../../../internal/utils";
import { BinLogCoordinates } from "./binlogcoordinates";
/**
 * Database instance clone context.
 */
export declare class CloneContext extends SpeakeasyBase {
    /**
     * The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?. Reserved for future use.
     */
    allocatedIpRange?: string;
    /**
     * Binary log coordinates.
     */
    binLogCoordinates?: BinLogCoordinates;
    /**
     * (SQL Server only) Clone only the specified databases from the source instance. Clone all databases if empty.
     */
    databaseNames?: string[];
    /**
     * Name of the Cloud SQL instance to be created as a clone.
     */
    destinationInstanceName?: string;
    /**
     * This is always `sql#cloneContext`.
     */
    kind?: string;
    /**
     * Reserved for future use.
     */
    pitrTimestampMs?: string;
    /**
     * Timestamp, if specified, identifies the time to which the source instance is cloned.
     */
    pointInTime?: string;
}
