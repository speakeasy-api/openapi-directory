package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Criteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasCompletedCourse")
    public Boolean hasCompletedCourse;
    public Criteria withHasCompletedCourse(Boolean hasCompletedCourse) {
        this.hasCompletedCourse = hasCompletedCourse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasPassedMandatoryAssessedQuizzes")
    public Boolean hasPassedMandatoryAssessedQuizzes;
    public Criteria withHasPassedMandatoryAssessedQuizzes(Boolean hasPassedMandatoryAssessedQuizzes) {
        this.hasPassedMandatoryAssessedQuizzes = hasPassedMandatoryAssessedQuizzes;
        return this;
    }
}