package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LanguagesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public LanguagesResource[] languages;
    public LanguagesListResponse withLanguages(LanguagesResource[] languages) {
        this.languages = languages;
        return this;
    }
}