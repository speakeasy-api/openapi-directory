package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuestionInput
 * Any question. The specific type of question is known by its `kind`.
**/
public class QuestionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("choiceQuestion")
    public ChoiceQuestionInput choiceQuestion;
    public QuestionInput withChoiceQuestion(ChoiceQuestionInput choiceQuestion) {
        this.choiceQuestion = choiceQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateQuestion")
    public DateQuestion dateQuestion;
    public QuestionInput withDateQuestion(DateQuestion dateQuestion) {
        this.dateQuestion = dateQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileUploadQuestion")
    public FileUploadQuestion fileUploadQuestion;
    public QuestionInput withFileUploadQuestion(FileUploadQuestion fileUploadQuestion) {
        this.fileUploadQuestion = fileUploadQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grading")
    public Grading grading;
    public QuestionInput withGrading(Grading grading) {
        this.grading = grading;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questionId")
    public String questionId;
    public QuestionInput withQuestionId(String questionId) {
        this.questionId = questionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public QuestionInput withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowQuestion")
    public RowQuestion rowQuestion;
    public QuestionInput withRowQuestion(RowQuestion rowQuestion) {
        this.rowQuestion = rowQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleQuestion")
    public ScaleQuestion scaleQuestion;
    public QuestionInput withScaleQuestion(ScaleQuestion scaleQuestion) {
        this.scaleQuestion = scaleQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textQuestion")
    public TextQuestion textQuestion;
    public QuestionInput withTextQuestion(TextQuestion textQuestion) {
        this.textQuestion = textQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeQuestion")
    public TimeQuestion timeQuestion;
    public QuestionInput withTimeQuestion(TimeQuestion timeQuestion) {
        this.timeQuestion = timeQuestion;
        return this;
    }
}