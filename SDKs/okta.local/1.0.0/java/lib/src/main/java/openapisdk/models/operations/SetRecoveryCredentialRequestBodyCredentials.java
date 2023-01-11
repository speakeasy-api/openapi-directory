package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetRecoveryCredentialRequestBodyCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recovery_question")
    public SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion recoveryQuestion;
    public SetRecoveryCredentialRequestBodyCredentials withRecoveryQuestion(SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion recoveryQuestion) {
        this.recoveryQuestion = recoveryQuestion;
        return this;
    }
}