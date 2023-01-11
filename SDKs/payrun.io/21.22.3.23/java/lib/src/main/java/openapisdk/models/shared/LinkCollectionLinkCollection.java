package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LinkCollectionLinkCollection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Links")
    public LinkCollectionLinkCollectionLink links;
    public LinkCollectionLinkCollection withLinks(LinkCollectionLinkCollectionLink links) {
        this.links = links;
        return this;
    }
}