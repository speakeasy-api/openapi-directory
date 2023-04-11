import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Importance of the source.
 */
export declare enum SourceScoringConfigSourceImportanceEnum {
    Default = "DEFAULT",
    Low = "LOW",
    High = "HIGH"
}
/**
 * Set the scoring configuration. This allows modifying the ranking of results for a source.
 */
export declare class SourceScoringConfig extends SpeakeasyBase {
    /**
     * Importance of the source.
     */
    sourceImportance?: SourceScoringConfigSourceImportanceEnum;
}
