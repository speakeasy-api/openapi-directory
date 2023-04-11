import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The subnet in which to house the connector
 */
export declare class Subnet extends SpeakeasyBase {
    /**
     * Subnet name (relative, not fully qualified). E.g. if the full subnet selfLink is https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}
     */
    name?: string;
    /**
     * Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued.
     */
    projectId?: string;
}
