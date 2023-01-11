package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Links
 * A collection of links, which are references from this span to a span in the same or different trace.
**/
public class Links {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droppedLinksCount")
    public Integer droppedLinksCount;
    public Links withDroppedLinksCount(Integer droppedLinksCount) {
        this.droppedLinksCount = droppedLinksCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public Link[] link;
    public Links withLink(Link[] link) {
        this.link = link;
        return this;
    }
}