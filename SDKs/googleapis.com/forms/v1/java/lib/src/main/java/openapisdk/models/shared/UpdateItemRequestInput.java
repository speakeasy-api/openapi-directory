package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateItemRequestInput
 * Update an item in a form.
**/
public class UpdateItemRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public ItemInput item;
    public UpdateItemRequestInput withItem(ItemInput item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public UpdateItemRequestInput withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public UpdateItemRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}