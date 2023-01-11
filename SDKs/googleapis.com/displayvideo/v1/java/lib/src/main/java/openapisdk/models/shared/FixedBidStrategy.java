package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FixedBidStrategy
 * A strategy that uses a fixed bidding price.
**/
public class FixedBidStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidAmountMicros")
    public String bidAmountMicros;
    public FixedBidStrategy withBidAmountMicros(String bidAmountMicros) {
        this.bidAmountMicros = bidAmountMicros;
        return this;
    }
}