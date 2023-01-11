package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProfileChildLink
 * Child link for this view (profile). Points to the list of goals for this view (profile).
**/
public class ProfileChildLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public ProfileChildLink withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ProfileChildLink withType(String type) {
        this.type = type;
        return this;
    }
}