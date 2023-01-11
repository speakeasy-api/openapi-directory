package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestValidateHeader
 * Validation results
**/
public class TestValidateHeader {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user-agent")
    public String userAgent;
    public TestValidateHeader withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
}