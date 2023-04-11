import { SpeakeasyBase } from "../../../internal/utils";
import { RRSetRoutingPolicyHealthCheckTargets } from "./rrsetroutingpolicyhealthchecktargets";
/**
 * ResourceRecordSet data for one geo location.
 */
export declare class RRSetRoutingPolicyGeoPolicyGeoPolicyItem extends SpeakeasyBase {
    /**
     * HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response.
     */
    healthCheckedTargets?: RRSetRoutingPolicyHealthCheckTargets;
    kind?: string;
    /**
     * The geo-location granularity is a GCP region. This location string should correspond to a GCP region. e.g. "us-east1", "southamerica-east1", "asia-east1", etc.
     */
    location?: string;
    rrdatas?: string[];
    /**
     * DNSSEC generated signatures for all the rrdata within this item. Note that if health checked targets are provided for DNSSEC enabled zones, there's a restriction of 1 ip per item. .
     */
    signatureRrdatas?: string[];
}
