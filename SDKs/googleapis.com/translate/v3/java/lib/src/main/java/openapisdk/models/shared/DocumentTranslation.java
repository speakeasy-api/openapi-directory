package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentTranslation
 * A translated document message.
**/
public class DocumentTranslation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byteStreamOutputs")
    public String[] byteStreamOutputs;
    public DocumentTranslation withByteStreamOutputs(String[] byteStreamOutputs) {
        this.byteStreamOutputs = byteStreamOutputs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedLanguageCode")
    public String detectedLanguageCode;
    public DocumentTranslation withDetectedLanguageCode(String detectedLanguageCode) {
        this.detectedLanguageCode = detectedLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public DocumentTranslation withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}