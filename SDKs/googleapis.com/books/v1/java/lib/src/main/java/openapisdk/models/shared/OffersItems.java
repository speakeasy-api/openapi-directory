package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OffersItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artUrl")
    public String artUrl;
    public OffersItems withArtUrl(String artUrl) {
        this.artUrl = artUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gservicesKey")
    public String gservicesKey;
    public OffersItems withGservicesKey(String gservicesKey) {
        this.gservicesKey = gservicesKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OffersItems withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public OffersItemsItems[] items;
    public OffersItems withItems(OffersItemsItems[] items) {
        this.items = items;
        return this;
    }
}