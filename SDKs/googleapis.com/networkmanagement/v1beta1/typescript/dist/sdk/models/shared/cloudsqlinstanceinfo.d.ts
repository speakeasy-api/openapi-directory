import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For display only. Metadata associated with a Cloud SQL instance.
 */
export declare class CloudSQLInstanceInfo extends SpeakeasyBase {
    /**
     * Name of a Cloud SQL instance.
     */
    displayName?: string;
    /**
     * External IP address of a Cloud SQL instance.
     */
    externalIp?: string;
    /**
     * Internal IP address of a Cloud SQL instance.
     */
    internalIp?: string;
    /**
     * URI of a Cloud SQL instance network or empty string if the instance does not have one.
     */
    networkUri?: string;
    /**
     * Region in which the Cloud SQL instance is running.
     */
    region?: string;
    /**
     * URI of a Cloud SQL instance.
     */
    uri?: string;
}
