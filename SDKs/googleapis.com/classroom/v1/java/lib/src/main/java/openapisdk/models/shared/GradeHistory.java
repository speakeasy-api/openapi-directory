package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GradeHistory
 * The history of each grade on this submission.
**/
public class GradeHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actorUserId")
    public String actorUserId;
    public GradeHistory withActorUserId(String actorUserId) {
        this.actorUserId = actorUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeChangeType")
    public GradeHistoryGradeChangeTypeEnum gradeChangeType;
    public GradeHistory withGradeChangeType(GradeHistoryGradeChangeTypeEnum gradeChangeType) {
        this.gradeChangeType = gradeChangeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeTimestamp")
    public String gradeTimestamp;
    public GradeHistory withGradeTimestamp(String gradeTimestamp) {
        this.gradeTimestamp = gradeTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPoints")
    public Double maxPoints;
    public GradeHistory withMaxPoints(Double maxPoints) {
        this.maxPoints = maxPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointsEarned")
    public Double pointsEarned;
    public GradeHistory withPointsEarned(Double pointsEarned) {
        this.pointsEarned = pointsEarned;
        return this;
    }
}