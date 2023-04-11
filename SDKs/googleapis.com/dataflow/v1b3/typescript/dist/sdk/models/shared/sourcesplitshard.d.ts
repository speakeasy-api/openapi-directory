import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * DEPRECATED
 */
export declare enum SourceSplitShardDerivationModeEnum {
    SourceDerivationModeUnknown = "SOURCE_DERIVATION_MODE_UNKNOWN",
    SourceDerivationModeIndependent = "SOURCE_DERIVATION_MODE_INDEPENDENT",
    SourceDerivationModeChildOfCurrent = "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT",
    SourceDerivationModeSiblingOfCurrent = "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"
}
/**
 * DEPRECATED in favor of DerivedSource.
 */
export declare class SourceSplitShard extends SpeakeasyBase {
    /**
     * DEPRECATED
     */
    derivationMode?: SourceSplitShardDerivationModeEnum;
    /**
     * A source that records can be read and decoded from.
     */
    source?: Source;
}
