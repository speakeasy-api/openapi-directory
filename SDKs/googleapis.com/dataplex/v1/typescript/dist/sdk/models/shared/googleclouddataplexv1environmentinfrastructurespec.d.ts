import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources } from "./googleclouddataplexv1environmentinfrastructurespeccomputeresources";
import { GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime } from "./googleclouddataplexv1environmentinfrastructurespecosimageruntime";
/**
 * Configuration for the underlying infrastructure used to run workloads.
 */
export declare class GoogleCloudDataplexV1EnvironmentInfrastructureSpec extends SpeakeasyBase {
    /**
     * Compute resources associated with the analyze interactive workloads.
     */
    compute?: GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources;
    /**
     * Software Runtime Configuration to run Analyze.
     */
    osImage?: GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime;
}
