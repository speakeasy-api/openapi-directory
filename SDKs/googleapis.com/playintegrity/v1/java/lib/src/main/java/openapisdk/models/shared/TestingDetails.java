package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestingDetails
 * Contains additional information generated for testing responses.
**/
public class TestingDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isTestingResponse")
    public Boolean isTestingResponse;
    public TestingDetails withIsTestingResponse(Boolean isTestingResponse) {
        this.isTestingResponse = isTestingResponse;
        return this;
    }
}