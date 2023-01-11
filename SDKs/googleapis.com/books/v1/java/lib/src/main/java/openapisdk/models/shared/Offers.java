package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Offers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public OffersItems[] items;
    public Offers withItems(OffersItems[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Offers withKind(String kind) {
        this.kind = kind;
        return this;
    }
}