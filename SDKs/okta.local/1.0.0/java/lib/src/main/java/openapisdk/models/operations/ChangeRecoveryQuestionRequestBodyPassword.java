package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChangeRecoveryQuestionRequestBodyPassword {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ChangeRecoveryQuestionRequestBodyPassword withValue(String value) {
        this.value = value;
        return this;
    }
}