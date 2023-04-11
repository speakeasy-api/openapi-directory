import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TrafficTarget holds a single entry of the routing table for a Route.
 */
export declare class TrafficTargetInput extends SpeakeasyBase {
    /**
     * [Deprecated] Not supported in Cloud Run. It must be empty.
     */
    configurationName?: string;
    /**
     * Uses the "status.latestReadyRevisionName" of the Service to determine the traffic target. When it changes, traffic will automatically migrate from the prior "latest ready" revision to the new one. This field must be false if RevisionName is set. This field defaults to true otherwise. If the field is set to true on Status, this means that the Revision was resolved from the Service's latest ready revision.
     */
    latestRevision?: boolean;
    /**
     * Percent specifies percent of the traffic to this Revision or Configuration. This defaults to zero if unspecified.
     */
    percent?: number;
    /**
     * Points this traffic target to a specific Revision. This field is mutually exclusive with latest_revision.
     */
    revisionName?: string;
    /**
     * Tag is used to expose a dedicated url for referencing this target exclusively.
     */
    tag?: string;
}
/**
 * TrafficTarget holds a single entry of the routing table for a Route.
 */
export declare class TrafficTarget extends SpeakeasyBase {
    /**
     * [Deprecated] Not supported in Cloud Run. It must be empty.
     */
    configurationName?: string;
    /**
     * Uses the "status.latestReadyRevisionName" of the Service to determine the traffic target. When it changes, traffic will automatically migrate from the prior "latest ready" revision to the new one. This field must be false if RevisionName is set. This field defaults to true otherwise. If the field is set to true on Status, this means that the Revision was resolved from the Service's latest ready revision.
     */
    latestRevision?: boolean;
    /**
     * Percent specifies percent of the traffic to this Revision or Configuration. This defaults to zero if unspecified.
     */
    percent?: number;
    /**
     * Points this traffic target to a specific Revision. This field is mutually exclusive with latest_revision.
     */
    revisionName?: string;
    /**
     * Tag is used to expose a dedicated url for referencing this target exclusively.
     */
    tag?: string;
    /**
     * Output only. URL displays the URL for accessing tagged traffic targets. URL is displayed in status, and is disallowed on spec. URL must contain a scheme (e.g. https://) and a hostname, but may not contain anything else (e.g. basic auth, url path, etc.)
     */
    url?: string;
}
