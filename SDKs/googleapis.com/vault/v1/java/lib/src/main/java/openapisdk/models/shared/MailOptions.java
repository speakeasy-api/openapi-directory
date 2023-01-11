package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MailOptions
 * Additional options for Gmail search
**/
public class MailOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeDrafts")
    public Boolean excludeDrafts;
    public MailOptions withExcludeDrafts(Boolean excludeDrafts) {
        this.excludeDrafts = excludeDrafts;
        return this;
    }
}