package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeveloperComment
 * Developer entry from conversation between user and developer.
**/
public class DeveloperComment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModified")
    public Timestamp lastModified;
    public DeveloperComment withLastModified(Timestamp lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public DeveloperComment withText(String text) {
        this.text = text;
        return this;
    }
}