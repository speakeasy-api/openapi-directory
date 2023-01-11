package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FeaturedCollectionCoverItem
 * Featured collection cover item metadata
**/
public class FeaturedCollectionCoverItem {
    @JsonProperty("url")
    public String url;
    public FeaturedCollectionCoverItem withUrl(String url) {
        this.url = url;
        return this;
    }
}