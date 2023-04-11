import { SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";
/**
 * The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Genomics service account or the request will fail.
 */
export declare class RunPipelineRequest extends SpeakeasyBase {
    /**
     * User-defined labels to associate with the returned operation. These labels are not propagated to any Google Cloud Platform resources used by the operation, and can be modified at any time. To associate labels with resources created while executing the operation, see the appropriate resource message (for example, `VirtualMachine`).
     */
    labels?: Record<string, string>;
    /**
     * Specifies a series of actions to execute, expressed as Docker containers.
     */
    pipeline?: Pipeline;
    /**
     * The name of an existing Pub/Sub topic. The server will publish messages to this topic whenever the status of the operation changes. The Genomics Service Agent account must have publisher permissions to the specified topic or notifications will not be sent.
     */
    pubSubTopic?: string;
}
