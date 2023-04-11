import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { SourceCrowdingConfig } from "./sourcecrowdingconfig";
import { SourceScoringConfig } from "./sourcescoringconfig";
/**
 * Configurations for a source while processing a Search or Suggest request.
 */
export declare class SourceConfig extends SpeakeasyBase {
    /**
     * Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host "crowd out" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source.
     */
    crowdingConfig?: SourceCrowdingConfig;
    /**
     * Set the scoring configuration. This allows modifying the ranking of results for a source.
     */
    scoringConfig?: SourceScoringConfig;
    /**
     * Defines sources for the suggest/search APIs.
     */
    source?: Source;
}
