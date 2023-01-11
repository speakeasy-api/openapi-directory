package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TranslateTextRequest
 * The main translation request message for the Cloud Translation API.
**/
public class TranslateTextRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public TranslateTextRequest withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public TranslateTextRequest withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("q")
    public String[] q;
    public TranslateTextRequest withQ(String[] q) {
        this.q = q;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public TranslateTextRequest withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public String target;
    public TranslateTextRequest withTarget(String target) {
        this.target = target;
        return this;
    }
}