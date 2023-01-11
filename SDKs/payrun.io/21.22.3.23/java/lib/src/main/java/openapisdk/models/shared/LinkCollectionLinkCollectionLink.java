package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkCollectionLinkCollectionLink
 * The link collections' links
**/
public class LinkCollectionLinkCollectionLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Link")
    public Object[] link;
    public LinkCollectionLinkCollectionLink withLink(Object[] link) {
        this.link = link;
        return this;
    }
}