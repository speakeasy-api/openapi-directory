package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLanguagesResponse {
    @JsonProperty("languages")
    public String[] languages;
    public GetLanguagesResponse withLanguages(String[] languages) {
        this.languages = languages;
        return this;
    }
}