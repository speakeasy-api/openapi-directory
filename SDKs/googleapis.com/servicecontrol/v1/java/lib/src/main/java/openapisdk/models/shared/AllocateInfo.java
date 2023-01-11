package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AllocateInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unusedArguments")
    public String[] unusedArguments;
    public AllocateInfo withUnusedArguments(String[] unusedArguments) {
        this.unusedArguments = unusedArguments;
        return this;
    }
}