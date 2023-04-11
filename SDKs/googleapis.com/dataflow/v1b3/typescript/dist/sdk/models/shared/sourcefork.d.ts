import { SpeakeasyBase } from "../../../internal/utils";
import { DerivedSource } from "./derivedsource";
import { SourceSplitShard } from "./sourcesplitshard";
/**
 * DEPRECATED in favor of DynamicSourceSplit.
 */
export declare class SourceFork extends SpeakeasyBase {
    /**
     * DEPRECATED in favor of DerivedSource.
     */
    primary?: SourceSplitShard;
    /**
     * Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split.
     */
    primarySource?: DerivedSource;
    /**
     * DEPRECATED in favor of DerivedSource.
     */
    residual?: SourceSplitShard;
    /**
     * Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split.
     */
    residualSource?: DerivedSource;
}
