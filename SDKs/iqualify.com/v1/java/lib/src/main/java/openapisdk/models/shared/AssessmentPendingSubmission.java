package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AssessmentPendingSubmission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public AssessmentPendingSubmission withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public Document[] documents;
    public AssessmentPendingSubmission withDocuments(Document[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dueDate")
    public OffsetDateTime dueDate;
    public AssessmentPendingSubmission withDueDate(OffsetDateTime dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationMinutes")
    public Integer durationMinutes;
    public AssessmentPendingSubmission withDurationMinutes(Integer durationMinutes) {
        this.durationMinutes = durationMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public AssessmentPendingSubmission withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden")
    public Boolean hidden;
    public AssessmentPendingSubmission withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssessmentPendingSubmission withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markNumber")
    public String markNumber;
    public AssessmentPendingSubmission withMarkNumber(String markNumber) {
        this.markNumber = markNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markType")
    public String markType;
    public AssessmentPendingSubmission withMarkType(String markType) {
        this.markType = markType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAttempts")
    public Integer maxAttempts;
    public AssessmentPendingSubmission withMaxAttempts(Integer maxAttempts) {
        this.maxAttempts = maxAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringId")
    public String offeringId;
    public AssessmentPendingSubmission withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringName")
    public String offeringName;
    public AssessmentPendingSubmission withOfferingName(String offeringName) {
        this.offeringName = offeringName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("openDate")
    public OffsetDateTime openDate;
    public AssessmentPendingSubmission withOpenDate(OffsetDateTime openDate) {
        this.openDate = openDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pid")
    public String pid;
    public AssessmentPendingSubmission withPid(String pid) {
        this.pid = pid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points")
    public String points;
    public AssessmentPendingSubmission withPoints(String points) {
        this.points = points;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("themes")
    public ThemeResponse[] themes;
    public AssessmentPendingSubmission withThemes(ThemeResponse[] themes) {
        this.themes = themes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AssessmentPendingSubmission withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalQuestions")
    public Integer totalQuestions;
    public AssessmentPendingSubmission withTotalQuestions(Integer totalQuestions) {
        this.totalQuestions = totalQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalThemes")
    public Integer totalThemes;
    public AssessmentPendingSubmission withTotalThemes(Integer totalThemes) {
        this.totalThemes = totalThemes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AssessmentPendingSubmission withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public User[] users;
    public AssessmentPendingSubmission withUsers(User[] users) {
        this.users = users;
        return this;
    }
}