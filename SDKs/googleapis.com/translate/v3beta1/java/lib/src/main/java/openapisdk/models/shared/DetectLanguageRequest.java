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
    @JsonProperty("content")
    public String content;
    public DetectLanguageRequest withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public DetectLanguageRequest withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public DetectLanguageRequest withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public DetectLanguageRequest withModel(String model) {
        this.model = model;
        return this;
    }
}