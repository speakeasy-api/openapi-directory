package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AttributeScores {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spanScores")
    public SpanScore[] spanScores;
    public AttributeScores withSpanScores(SpanScore[] spanScores) {
        this.spanScores = spanScores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summaryScore")
    public Score summaryScore;
    public AttributeScores withSummaryScore(Score summaryScore) {
        this.summaryScore = summaryScore;
        return this;
    }
}