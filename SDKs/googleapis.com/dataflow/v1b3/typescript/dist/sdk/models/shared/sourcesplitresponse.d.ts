import { SpeakeasyBase } from "../../../internal/utils";
import { DerivedSource } from "./derivedsource";
import { SourceSplitShard } from "./sourcesplitshard";
/**
 * Indicates whether splitting happened and produced a list of bundles. If this is USE_CURRENT_SOURCE_AS_IS, the current source should be processed "as is" without splitting. "bundles" is ignored in this case. If this is SPLITTING_HAPPENED, then "bundles" contains a list of bundles into which the source was split.
 */
export declare enum SourceSplitResponseOutcomeEnum {
    SourceSplitOutcomeUnknown = "SOURCE_SPLIT_OUTCOME_UNKNOWN",
    SourceSplitOutcomeUseCurrent = "SOURCE_SPLIT_OUTCOME_USE_CURRENT",
    SourceSplitOutcomeSplittingHappened = "SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED"
}
/**
 * The response to a SourceSplitRequest.
 */
export declare class SourceSplitResponse extends SpeakeasyBase {
    /**
     * If outcome is SPLITTING_HAPPENED, then this is a list of bundles into which the source was split. Otherwise this field is ignored. This list can be empty, which means the source represents an empty input.
     */
    bundles?: DerivedSource[];
    /**
     * Indicates whether splitting happened and produced a list of bundles. If this is USE_CURRENT_SOURCE_AS_IS, the current source should be processed "as is" without splitting. "bundles" is ignored in this case. If this is SPLITTING_HAPPENED, then "bundles" contains a list of bundles into which the source was split.
     */
    outcome?: SourceSplitResponseOutcomeEnum;
    /**
     * DEPRECATED in favor of bundles.
     */
    shards?: SourceSplitShard[];
}
