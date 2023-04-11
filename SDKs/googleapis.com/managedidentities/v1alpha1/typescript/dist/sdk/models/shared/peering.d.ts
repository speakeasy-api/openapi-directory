import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Managed Microsoft Identities Peering.
 */
export declare class PeeringInput extends SpeakeasyBase {
    /**
     * Required. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail.
     */
    authorizedNetwork?: string;
    /**
     * Required. Full domain resource path for the Managed AD Domain involved in peering. The resource path should be in the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     */
    domainResource?: string;
    /**
     * Optional. Resource labels to represent user provided metadata.
     */
    labels?: Record<string, string>;
}
/**
 * Output only. The current state of this Peering.
 */
export declare enum PeeringStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Connected = "CONNECTED",
    Disconnected = "DISCONNECTED",
    Deleting = "DELETING"
}
/**
 * Represents a Managed Microsoft Identities Peering.
 */
export declare class Peering extends SpeakeasyBase {
    /**
     * Required. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail.
     */
    authorizedNetwork?: string;
    /**
     * Output only. The time the instance was created.
     */
    createTime?: string;
    /**
     * Required. Full domain resource path for the Managed AD Domain involved in peering. The resource path should be in the form: `projects/{project_id}/locations/global/domains/{domain_name}`
     */
    domainResource?: string;
    /**
     * Optional. Resource labels to represent user provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Output only. Unique name of the peering in this scope including projects and location using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`.
     */
    name?: string;
    /**
     * Output only. The current state of this Peering.
     */
    state?: PeeringStateEnum;
    /**
     * Output only. Additional information about the current status of this peering, if available.
     */
    statusMessage?: string;
    /**
     * Output only. Last update time.
     */
    updateTime?: string;
}
