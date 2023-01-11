package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateItemRequestInput
 * Create an item in a form.
**/
public class CreateItemRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public ItemInput item;
    public CreateItemRequestInput withItem(ItemInput item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public CreateItemRequestInput withLocation(Location location) {
        this.location = location;
        return this;
    }
}