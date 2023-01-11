package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxRateProductCountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counts")
    public TaxRateProductCount[] counts;
    public TaxRateProductCountResponse withCounts(TaxRateProductCount[] counts) {
        this.counts = counts;
        return this;
    }
}