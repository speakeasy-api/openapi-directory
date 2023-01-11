package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Link
 * A link to a related resource, or an empty object if there is no resource to link to
**/
public class Link {
    @JsonProperty("href")
    public String href;
    public Link withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Link withType(String type) {
        this.type = type;
        return this;
    }
}