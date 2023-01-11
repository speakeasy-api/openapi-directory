package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApkListing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public ApkListing withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recentChanges")
    public String recentChanges;
    public ApkListing withRecentChanges(String recentChanges) {
        this.recentChanges = recentChanges;
        return this;
    }
}