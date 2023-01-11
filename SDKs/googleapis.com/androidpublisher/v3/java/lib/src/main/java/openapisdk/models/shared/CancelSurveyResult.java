package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CancelSurveyResult
 * Result of the cancel survey when the subscription was canceled by the user.
**/
public class CancelSurveyResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public CancelSurveyResultReasonEnum reason;
    public CancelSurveyResult withReason(CancelSurveyResultReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonUserInput")
    public String reasonUserInput;
    public CancelSurveyResult withReasonUserInput(String reasonUserInput) {
        this.reasonUserInput = reasonUserInput;
        return this;
    }
}