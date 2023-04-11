import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestionClusterProto } from "./suggestionclusterproto";
/**
 * Response message for AccessibilityService.ListStepAccessibilityClusters.
 */
export declare class ListStepAccessibilityClustersResponse extends SpeakeasyBase {
    /**
     * A sequence of accessibility suggestions, grouped into clusters. Within the sequence, clusters that belong to the same SuggestionCategory should be adjacent. Within each category, clusters should be ordered by their SuggestionPriority (ERRORs first). The categories should be ordered by their highest priority cluster.
     */
    clusters?: SuggestionClusterProto[];
    /**
     * A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Always presents.
     */
    name?: string;
}
