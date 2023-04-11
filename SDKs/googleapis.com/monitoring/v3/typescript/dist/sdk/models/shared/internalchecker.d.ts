import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current operational state of the internal checker.
 */
export declare enum InternalCheckerStateEnum {
    Unspecified = "UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING"
}
/**
 * An internal checker allows Uptime checks to run on private/internal GCP resources.
 */
export declare class InternalChecker extends SpeakeasyBase {
    /**
     * The checker's human-readable name. The display name should be unique within a Cloud Monitoring Metrics Scope in order to make it easier to identify; however, uniqueness is not enforced.
     */
    displayName?: string;
    /**
     * The GCP zone the Uptime check should egress from. Only respected for internal Uptime checks, where internal_network is specified.
     */
    gcpZone?: string;
    /**
     * A unique resource name for this InternalChecker. The format is: projects/[PROJECT_ID_OR_NUMBER]/internalCheckers/[INTERNAL_CHECKER_ID] [PROJECT_ID_OR_NUMBER] is the Cloud Monitoring Metrics Scope project for the Uptime check config associated with the internal checker.
     */
    name?: string;
    /**
     * The GCP VPC network (https://cloud.google.com/vpc/docs/vpc) where the internal resource lives (ex: "default").
     */
    network?: string;
    /**
     * The GCP project ID where the internal checker lives. Not necessary the same as the Metrics Scope project.
     */
    peerProjectId?: string;
    /**
     * The current operational state of the internal checker.
     */
    state?: InternalCheckerStateEnum;
}
