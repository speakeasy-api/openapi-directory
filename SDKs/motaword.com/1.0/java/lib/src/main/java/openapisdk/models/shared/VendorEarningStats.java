package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VendorEarningStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Float total;
    public VendorEarningStats withTotal(Float total) {
        this.total = total;
        return this;
    }
}