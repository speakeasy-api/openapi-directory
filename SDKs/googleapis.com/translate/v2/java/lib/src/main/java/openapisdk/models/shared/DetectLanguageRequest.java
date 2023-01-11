package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetectLanguageRequest
 * The request message for language detection.
**/
public class DetectLanguageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("q")
    public String[] q;
    public DetectLanguageRequest withQ(String[] q) {
        this.q = q;
        return this;
    }
}