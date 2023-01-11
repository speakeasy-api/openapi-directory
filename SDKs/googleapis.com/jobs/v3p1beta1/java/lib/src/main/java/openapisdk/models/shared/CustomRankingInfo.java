package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomRankingInfo
 * Input only. Custom ranking information for SearchJobsRequest.
**/
public class CustomRankingInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importanceLevel")
    public CustomRankingInfoImportanceLevelEnum importanceLevel;
    public CustomRankingInfo withImportanceLevel(CustomRankingInfoImportanceLevelEnum importanceLevel) {
        this.importanceLevel = importanceLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rankingExpression")
    public String rankingExpression;
    public CustomRankingInfo withRankingExpression(String rankingExpression) {
        this.rankingExpression = rankingExpression;
        return this;
    }
}