package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Link {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Link")
    public LinkLink link;
    public Link withLink(LinkLink link) {
        this.link = link;
        return this;
    }
}