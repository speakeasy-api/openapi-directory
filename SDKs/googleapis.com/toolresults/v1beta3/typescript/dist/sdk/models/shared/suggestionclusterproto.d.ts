import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestionProto } from "./suggestionproto";
/**
 * Category in which these types of suggestions should appear. Always set.
 */
export declare enum SuggestionClusterProtoCategoryEnum {
    UnknownCategory = "unknownCategory",
    ContentLabeling = "contentLabeling",
    TouchTargetSize = "touchTargetSize",
    LowContrast = "lowContrast",
    Implementation = "implementation"
}
/**
 * A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's.
 */
export declare class SuggestionClusterProto extends SpeakeasyBase {
    /**
     * Category in which these types of suggestions should appear. Always set.
     */
    category?: SuggestionClusterProtoCategoryEnum;
    /**
     * A sequence of suggestions. All of the suggestions within a cluster must have the same SuggestionPriority and belong to the same SuggestionCategory. Suggestions with the same screenshot URL should be adjacent.
     */
    suggestions?: SuggestionProto[];
}
