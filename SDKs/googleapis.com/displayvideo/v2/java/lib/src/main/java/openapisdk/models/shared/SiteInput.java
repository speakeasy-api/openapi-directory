package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SiteInput
 * A single site. Sites are apps or websites belonging to a channel.
**/
public class SiteInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlOrAppId")
    public String urlOrAppId;
    public SiteInput withUrlOrAppId(String urlOrAppId) {
        this.urlOrAppId = urlOrAppId;
        return this;
    }
}