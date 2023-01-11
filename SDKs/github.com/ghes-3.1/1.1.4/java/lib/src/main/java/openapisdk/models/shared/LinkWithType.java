package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LinkWithType
 * Hypermedia Link with Type
**/
public class LinkWithType {
    @JsonProperty("href")
    public String href;
    public LinkWithType withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public LinkWithType withType(String type) {
        this.type = type;
        return this;
    }
}