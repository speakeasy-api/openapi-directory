import { SpeakeasyBase } from "../../../internal/utils";
import { DerivedSource } from "./derivedsource";
/**
 * When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input.
 */
export declare class DynamicSourceSplit extends SpeakeasyBase {
    /**
     * Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split.
     */
    primary?: DerivedSource;
    /**
     * Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split.
     */
    residual?: DerivedSource;
}
