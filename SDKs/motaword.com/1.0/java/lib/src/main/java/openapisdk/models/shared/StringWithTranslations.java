package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StringWithTranslations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public StringWithTranslations withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_id")
    public Long fileId;
    public StringWithTranslations withFileId(Long fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public StringWithTranslations withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translations")
    public java.util.Map<String, StringTranslation> translations;
    public StringWithTranslations withTranslations(java.util.Map<String, StringTranslation> translations) {
        this.translations = translations;
        return this;
    }
}