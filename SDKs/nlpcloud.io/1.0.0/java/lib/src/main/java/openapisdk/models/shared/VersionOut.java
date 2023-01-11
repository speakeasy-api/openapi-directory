package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VersionOut {
    @JsonProperty("spacy")
    public String spacy;
    public VersionOut withSpacy(String spacy) {
        this.spacy = spacy;
        return this;
    }
}