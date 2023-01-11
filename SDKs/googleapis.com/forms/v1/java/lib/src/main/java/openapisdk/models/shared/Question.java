package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Question
 * Any question. The specific type of question is known by its `kind`.
**/
public class Question {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("choiceQuestion")
    public ChoiceQuestion choiceQuestion;
    public Question withChoiceQuestion(ChoiceQuestion choiceQuestion) {
        this.choiceQuestion = choiceQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateQuestion")
    public DateQuestion dateQuestion;
    public Question withDateQuestion(DateQuestion dateQuestion) {
        this.dateQuestion = dateQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileUploadQuestion")
    public FileUploadQuestion fileUploadQuestion;
    public Question withFileUploadQuestion(FileUploadQuestion fileUploadQuestion) {
        this.fileUploadQuestion = fileUploadQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grading")
    public Grading grading;
    public Question withGrading(Grading grading) {
        this.grading = grading;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questionId")
    public String questionId;
    public Question withQuestionId(String questionId) {
        this.questionId = questionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public Question withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowQuestion")
    public RowQuestion rowQuestion;
    public Question withRowQuestion(RowQuestion rowQuestion) {
        this.rowQuestion = rowQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleQuestion")
    public ScaleQuestion scaleQuestion;
    public Question withScaleQuestion(ScaleQuestion scaleQuestion) {
        this.scaleQuestion = scaleQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textQuestion")
    public TextQuestion textQuestion;
    public Question withTextQuestion(TextQuestion textQuestion) {
        this.textQuestion = textQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeQuestion")
    public TimeQuestion timeQuestion;
    public Question withTimeQuestion(TimeQuestion timeQuestion) {
        this.timeQuestion = timeQuestion;
        return this;
    }
}