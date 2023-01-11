package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnitReactionsAnalyticsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback")
    public UnitReactionsFeedback feedback;
    public UnitReactionsAnalyticsResponse withFeedback(UnitReactionsFeedback feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageId")
    public Boolean pageId;
    public UnitReactionsAnalyticsResponse withPageId(Boolean pageId) {
        this.pageId = pageId;
        return this;
    }
}