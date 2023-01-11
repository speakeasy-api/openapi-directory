package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Answer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileUploadAnswers")
    public FileUploadAnswers fileUploadAnswers;
    public Answer withFileUploadAnswers(FileUploadAnswers fileUploadAnswers) {
        this.fileUploadAnswers = fileUploadAnswers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grade")
    public Grade grade;
    public Answer withGrade(Grade grade) {
        this.grade = grade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questionId")
    public String questionId;
    public Answer withQuestionId(String questionId) {
        this.questionId = questionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textAnswers")
    public TextAnswers textAnswers;
    public Answer withTextAnswers(TextAnswers textAnswers) {
        this.textAnswers = textAnswers;
        return this;
    }
}