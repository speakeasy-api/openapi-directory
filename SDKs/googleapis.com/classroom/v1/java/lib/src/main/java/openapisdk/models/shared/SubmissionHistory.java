package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmissionHistory
 * The history of the submission. This currently includes state and grade histories.
**/
public class SubmissionHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeHistory")
    public GradeHistory gradeHistory;
    public SubmissionHistory withGradeHistory(GradeHistory gradeHistory) {
        this.gradeHistory = gradeHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateHistory")
    public StateHistory stateHistory;
    public SubmissionHistory withStateHistory(StateHistory stateHistory) {
        this.stateHistory = stateHistory;
        return this;
    }
}