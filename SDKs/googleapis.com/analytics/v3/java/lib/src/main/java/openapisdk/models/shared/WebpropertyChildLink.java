package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebpropertyChildLink
 * Child link for this web property. Points to the list of views (profiles) for this web property.
**/
public class WebpropertyChildLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public WebpropertyChildLink withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public WebpropertyChildLink withType(String type) {
        this.type = type;
        return this;
    }
}