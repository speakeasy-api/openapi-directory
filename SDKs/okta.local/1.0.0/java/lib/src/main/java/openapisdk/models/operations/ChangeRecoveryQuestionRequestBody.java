package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChangeRecoveryQuestionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public ChangeRecoveryQuestionRequestBodyPassword password;
    public ChangeRecoveryQuestionRequestBody withPassword(ChangeRecoveryQuestionRequestBodyPassword password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recovery_question")
    public ChangeRecoveryQuestionRequestBodyRecoveryQuestion recoveryQuestion;
    public ChangeRecoveryQuestionRequestBody withRecoveryQuestion(ChangeRecoveryQuestionRequestBodyRecoveryQuestion recoveryQuestion) {
        this.recoveryQuestion = recoveryQuestion;
        return this;
    }
}