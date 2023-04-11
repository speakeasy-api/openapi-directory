import { SpeakeasyBase } from "../../../internal/utils";
import { MapTask } from "./maptask";
import { Package } from "./package";
import { SeqMapTask } from "./seqmaptask";
import { ShellTask } from "./shelltask";
import { SourceOperationRequest } from "./sourceoperationrequest";
import { StreamingComputationTask } from "./streamingcomputationtask";
import { StreamingConfigTask } from "./streamingconfigtask";
import { StreamingSetupTask } from "./streamingsetuptask";
/**
 * WorkItem represents basic information about a WorkItem to be executed in the cloud.
 */
export declare class WorkItem extends SpeakeasyBase {
    /**
     * Work item-specific configuration as an opaque blob.
     */
    configuration?: string;
    /**
     * Identifies this WorkItem.
     */
    id?: string;
    /**
     * The initial index to use when reporting the status of the WorkItem.
     */
    initialReportIndex?: string;
    /**
     * Identifies the workflow job this WorkItem belongs to.
     */
    jobId?: string;
    /**
     * Time when the lease on this Work will expire.
     */
    leaseExpireTime?: string;
    /**
     * MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output.
     */
    mapTask?: MapTask;
    /**
     * Any required packages that need to be fetched in order to execute this WorkItem.
     */
    packages?: Package[];
    /**
     * Identifies the cloud project this WorkItem belongs to.
     */
    projectId?: string;
    /**
     * Recommended reporting interval.
     */
    reportStatusInterval?: string;
    /**
     * Describes a particular function to invoke.
     */
    seqMapTask?: SeqMapTask;
    /**
     * A task which consists of a shell command for the worker to execute.
     */
    shellTask?: ShellTask;
    /**
     * A work item that represents the different operations that can be performed on a user-defined Source specification.
     */
    sourceOperationTask?: SourceOperationRequest;
    /**
     * A task which describes what action should be performed for the specified streaming computation ranges.
     */
    streamingComputationTask?: StreamingComputationTask;
    /**
     * A task that carries configuration information for streaming computations.
     */
    streamingConfigTask?: StreamingConfigTask;
    /**
     * A task which initializes part of a streaming Dataflow job.
     */
    streamingSetupTask?: StreamingSetupTask;
}
