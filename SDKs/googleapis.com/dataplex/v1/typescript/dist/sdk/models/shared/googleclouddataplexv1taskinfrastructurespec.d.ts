import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources } from "./googleclouddataplexv1taskinfrastructurespecbatchcomputeresources";
import { GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime } from "./googleclouddataplexv1taskinfrastructurespeccontainerimageruntime";
import { GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork } from "./googleclouddataplexv1taskinfrastructurespecvpcnetwork";
/**
 * Configuration for the underlying infrastructure used to run workloads.
 */
export declare class GoogleCloudDataplexV1TaskInfrastructureSpec extends SpeakeasyBase {
    /**
     * Batch compute resources associated with the task.
     */
    batch?: GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources;
    /**
     * Container Image Runtime Configuration used with Batch execution.
     */
    containerImage?: GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime;
    /**
     * Cloud VPC Network used to run the infrastructure.
     */
    vpcNetwork?: GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork;
}
