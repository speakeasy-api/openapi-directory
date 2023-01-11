package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuestAttributesValue
 * Array of guest attribute namespace/key/value tuples.
**/
public class GuestAttributesValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public GuestAttributesEntry[] items;
    public GuestAttributesValue withItems(GuestAttributesEntry[] items) {
        this.items = items;
        return this;
    }
}