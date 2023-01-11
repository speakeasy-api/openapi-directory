package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentInputConfig
 * A document translation request input config.
**/
public class DocumentInputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public DocumentInputConfig withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GcsSource gcsSource;
    public DocumentInputConfig withGcsSource(GcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public DocumentInputConfig withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}