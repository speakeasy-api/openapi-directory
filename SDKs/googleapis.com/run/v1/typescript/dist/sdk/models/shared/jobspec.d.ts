import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionTemplateSpec } from "./executiontemplatespec";
/**
 * JobSpec describes how the job will look.
 */
export declare class JobSpec extends SpeakeasyBase {
    /**
     * ExecutionTemplateSpec describes the metadata and spec an Execution should have when created from a job. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
     */
    template?: ExecutionTemplateSpec;
}
