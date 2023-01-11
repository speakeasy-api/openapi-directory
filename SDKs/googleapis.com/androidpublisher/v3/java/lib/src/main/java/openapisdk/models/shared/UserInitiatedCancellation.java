package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserInitiatedCancellation
 * Information specific to cancellations initiated by users.
**/
public class UserInitiatedCancellation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelSurveyResult")
    public CancelSurveyResult cancelSurveyResult;
    public UserInitiatedCancellation withCancelSurveyResult(CancelSurveyResult cancelSurveyResult) {
        this.cancelSurveyResult = cancelSurveyResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelTime")
    public String cancelTime;
    public UserInitiatedCancellation withCancelTime(String cancelTime) {
        this.cancelTime = cancelTime;
        return this;
    }
}