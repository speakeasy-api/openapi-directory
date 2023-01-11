package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FourHundredAndThreeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public FourHundredAndThreeResponse withTitle(String title) {
        this.title = title;
        return this;
    }
}