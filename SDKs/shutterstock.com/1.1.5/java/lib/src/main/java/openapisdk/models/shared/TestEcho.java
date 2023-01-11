package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestEcho
 * Text to echo in the response
**/
public class TestEcho {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public TestEcho withText(String text) {
        this.text = text;
        return this;
    }
}