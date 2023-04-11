import { SpeakeasyBase } from "../../../internal/utils";
import { TaskTemplateSpec } from "./tasktemplatespec";
/**
 * ExecutionSpec describes how the execution will look.
 */
export declare class ExecutionSpec extends SpeakeasyBase {
    /**
     * Optional. Specifies the maximum desired number of tasks the execution should run at given time. Must be <= task_count. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed, i.e. when the work left to do is less than max parallelism.
     */
    parallelism?: number;
    /**
     * Optional. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1.
     */
    taskCount?: number;
    /**
     * TaskTemplateSpec describes the data a task should have when created from a template.
     */
    template?: TaskTemplateSpec;
}
