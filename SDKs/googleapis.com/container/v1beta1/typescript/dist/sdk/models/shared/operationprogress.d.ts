import { SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";
/**
 * Status of an operation stage. Unset for single-stage operations.
 */
export declare enum OperationProgressStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE",
    Aborting = "ABORTING"
}
/**
 * Information about operation (or operation stage) progress.
 */
export declare class OperationProgress extends SpeakeasyBase {
    /**
     * Progress metric bundle, for example: metrics: [{name: "nodes done", int_value: 15}, {name: "nodes total", int_value: 32}] or metrics: [{name: "progress", double_value: 0.56}, {name: "progress scale", double_value: 1.0}]
     */
    metrics?: Metric[];
    /**
     * A non-parameterized string describing an operation stage. Unset for single-stage operations.
     */
    name?: string;
    /**
     * Substages of an operation or a stage.
     */
    stages?: OperationProgress[];
    /**
     * Status of an operation stage. Unset for single-stage operations.
     */
    status?: OperationProgressStatusEnum;
}
