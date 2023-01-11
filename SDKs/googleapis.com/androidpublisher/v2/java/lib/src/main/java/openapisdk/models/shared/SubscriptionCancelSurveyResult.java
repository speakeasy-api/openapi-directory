package openapisdk.models.shared;



/**
 * SubscriptionCancelSurveyResult
 * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
**/
public class SubscriptionCancelSurveyResult {
    public Integer cancelSurveyReason;
    public SubscriptionCancelSurveyResult withCancelSurveyReason(Integer cancelSurveyReason) {
        this.cancelSurveyReason = cancelSurveyReason;
        return this;
    }
    public String userInputCancelReason;
    public SubscriptionCancelSurveyResult withUserInputCancelReason(String userInputCancelReason) {
        this.userInputCancelReason = userInputCancelReason;
        return this;
    }
}