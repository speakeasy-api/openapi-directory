import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Network describes the GCP network used to create workers in.
 */
export declare class Network extends SpeakeasyBase {
    /**
     * Network on which the workers are created. "default" network is used if empty.
     */
    network?: string;
    /**
     * Project id containing the defined network and subnetwork. For a peered VPC, this will be the same as the project_id in which the workers are created. For a shared VPC, this will be the project sharing the network with the project_id project in which workers will be created. For custom workers with no VPC, this will be the same as project_id.
     */
    projectId?: string;
    /**
     * Subnetwork on which the workers are created. "default" subnetwork is used if empty.
     */
    subnetwork?: string;
}
