import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines an SDK harness container for executing Dataflow pipelines.
 */
export declare class SDKHarnessContainerImage extends SpeakeasyBase {
    /**
     * The set of capabilities enumerated in the above Environment proto. See also [beam_runner_api.proto](https://github.com/apache/beam/blob/master/model/pipeline/src/main/proto/org/apache/beam/model/pipeline/v1/beam_runner_api.proto)
     */
    capabilities?: string[];
    /**
     * A docker container image that resides in Google Container Registry.
     */
    containerImage?: string;
    /**
     * Environment ID for the Beam runner API proto Environment that corresponds to the current SDK Harness.
     */
    environmentId?: string;
    /**
     * If true, recommends the Dataflow service to use only one core per SDK container instance with this image. If false (or unset) recommends using more than one core per SDK container instance with this image for efficiency. Note that Dataflow service may choose to override this property if needed.
     */
    useSingleCorePerContainer?: boolean;
}
