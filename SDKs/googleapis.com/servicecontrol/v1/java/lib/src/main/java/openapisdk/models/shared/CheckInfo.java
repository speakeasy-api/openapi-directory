package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckInfo
 * Contains additional information about the check operation.
**/
public class CheckInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerInfo")
    public ConsumerInfo consumerInfo;
    public CheckInfo withConsumerInfo(ConsumerInfo consumerInfo) {
        this.consumerInfo = consumerInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unusedArguments")
    public String[] unusedArguments;
    public CheckInfo withUnusedArguments(String[] unusedArguments) {
        this.unusedArguments = unusedArguments;
        return this;
    }
}