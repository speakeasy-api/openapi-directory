package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionCancelSurveyResult
 * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
**/
public class SubscriptionCancelSurveyResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelSurveyReason")
    public Integer cancelSurveyReason;
    public SubscriptionCancelSurveyResult withCancelSurveyReason(Integer cancelSurveyReason) {
        this.cancelSurveyReason = cancelSurveyReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInputCancelReason")
    public String userInputCancelReason;
    public SubscriptionCancelSurveyResult withUserInputCancelReason(String userInputCancelReason) {
        this.userInputCancelReason = userInputCancelReason;
        return this;
    }
}