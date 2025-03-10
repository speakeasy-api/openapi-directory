/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * SubscriptionCancelSurveyResult - Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
 */
public class SubscriptionCancelSurveyResult {
    /**
     * The cancellation reason the user chose in the survey. Possible values are:  
     * - Other 
     * - I don't use this service enough 
     * - Technical issues 
     * - Cost-related reasons 
     * - I found a better app
     */
    
    public Integer cancelSurveyReason;

    public SubscriptionCancelSurveyResult withCancelSurveyReason(Integer cancelSurveyReason) {
        this.cancelSurveyReason = cancelSurveyReason;
        return this;
    }
    
    /**
     * The customized input cancel reason from the user. Only present when cancelReason is 0.
     */
    
    public String userInputCancelReason;

    public SubscriptionCancelSurveyResult withUserInputCancelReason(String userInputCancelReason) {
        this.userInputCancelReason = userInputCancelReason;
        return this;
    }
    
    public SubscriptionCancelSurveyResult(){}
}
