import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cloud VPC Network used to run the infrastructure.
 */
export declare class GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork extends SpeakeasyBase {
    /**
     * Optional. The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.
     */
    network?: string;
    /**
     * Optional. List of network tags to apply to the job.
     */
    networkTags?: string[];
    /**
     * Optional. The Cloud VPC sub-network in which the job is run.
     */
    subNetwork?: string;
}
