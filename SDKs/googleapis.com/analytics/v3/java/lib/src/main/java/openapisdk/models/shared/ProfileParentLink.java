package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProfileParentLink
 * Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
**/
public class ProfileParentLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public ProfileParentLink withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ProfileParentLink withType(String type) {
        this.type = type;
        return this;
    }
}