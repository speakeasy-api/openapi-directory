package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestDetails
 * Additional details about the progress of the running test.
**/
public class TestDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public TestDetails withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressMessages")
    public String[] progressMessages;
    public TestDetails withProgressMessages(String[] progressMessages) {
        this.progressMessages = progressMessages;
        return this;
    }
}