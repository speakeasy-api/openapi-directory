package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormResponse
 * A form response.
**/
public class FormResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public java.util.Map<String, Answer> answers;
    public FormResponse withAnswers(java.util.Map<String, Answer> answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public FormResponse withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formId")
    public String formId;
    public FormResponse withFormId(String formId) {
        this.formId = formId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSubmittedTime")
    public String lastSubmittedTime;
    public FormResponse withLastSubmittedTime(String lastSubmittedTime) {
        this.lastSubmittedTime = lastSubmittedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("respondentEmail")
    public String respondentEmail;
    public FormResponse withRespondentEmail(String respondentEmail) {
        this.respondentEmail = respondentEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseId")
    public String responseId;
    public FormResponse withResponseId(String responseId) {
        this.responseId = responseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalScore")
    public Double totalScore;
    public FormResponse withTotalScore(Double totalScore) {
        this.totalScore = totalScore;
        return this;
    }
}