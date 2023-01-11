package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LunRange
 * A LUN(Logical Unit Number) range.
**/
public class LunRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Integer quantity;
    public LunRange withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeGb")
    public Integer sizeGb;
    public LunRange withSizeGb(Integer sizeGb) {
        this.sizeGb = sizeGb;
        return this;
    }
}