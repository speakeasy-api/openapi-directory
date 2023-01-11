package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostStringsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public String[] contents;
    public PostStringsRequestBody withContents(String[] contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_language")
    public String sourceLanguage;
    public PostStringsRequestBody withSourceLanguage(String sourceLanguage) {
        this.sourceLanguage = sourceLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_languages")
    public String[] targetLanguages;
    public PostStringsRequestBody withTargetLanguages(String[] targetLanguages) {
        this.targetLanguages = targetLanguages;
        return this;
    }
}