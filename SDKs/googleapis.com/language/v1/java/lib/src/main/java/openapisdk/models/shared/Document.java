package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Document
 * Represents the input to API methods.
**/
public class Document {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public Document withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsContentUri")
    public String gcsContentUri;
    public Document withGcsContentUri(String gcsContentUri) {
        this.gcsContentUri = gcsContentUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public Document withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DocumentTypeEnum type;
    public Document withType(DocumentTypeEnum type) {
        this.type = type;
        return this;
    }
}