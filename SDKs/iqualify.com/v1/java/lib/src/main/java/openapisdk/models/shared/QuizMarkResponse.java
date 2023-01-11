package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class QuizMarkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attempts")
    public Integer attempts;
    public QuizMarkResponse withAttempts(Integer attempts) {
        this.attempts = attempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastAttemptAt")
    public OffsetDateTime lastAttemptAt;
    public QuizMarkResponse withLastAttemptAt(OffsetDateTime lastAttemptAt) {
        this.lastAttemptAt = lastAttemptAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learnerEmail")
    public String learnerEmail;
    public QuizMarkResponse withLearnerEmail(String learnerEmail) {
        this.learnerEmail = learnerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learnerFullname")
    public String learnerFullname;
    public QuizMarkResponse withLearnerFullname(String learnerFullname) {
        this.learnerFullname = learnerFullname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learnerPersonId")
    public String learnerPersonId;
    public QuizMarkResponse withLearnerPersonId(String learnerPersonId) {
        this.learnerPersonId = learnerPersonId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mark")
    public String mark;
    public QuizMarkResponse withMark(String mark) {
        this.mark = mark;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quizId")
    public String quizId;
    public QuizMarkResponse withQuizId(String quizId) {
        this.quizId = quizId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quizTitle")
    public String quizTitle;
    public QuizMarkResponse withQuizTitle(String quizTitle) {
        this.quizTitle = quizTitle;
        return this;
    }
}