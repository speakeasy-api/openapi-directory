import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionSpec } from "./executionspec";
import { ObjectMeta } from "./objectmeta";
/**
 * ExecutionTemplateSpec describes the metadata and spec an Execution should have when created from a job. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
 */
export declare class ExecutionTemplateSpec extends SpeakeasyBase {
    /**
     * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta;
    /**
     * ExecutionSpec describes how the execution will look.
     */
    spec?: ExecutionSpec;
}
