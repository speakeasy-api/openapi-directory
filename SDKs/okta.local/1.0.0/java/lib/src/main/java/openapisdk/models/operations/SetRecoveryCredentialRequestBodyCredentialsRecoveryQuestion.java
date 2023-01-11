package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer")
    public String answer;
    public SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question")
    public String question;
    public SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion withQuestion(String question) {
        this.question = question;
        return this;
    }
}