package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExchangeTargetingOptionDetails
 * Represents a targetable exchange. This will be populated in the exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.
**/
public class ExchangeTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchange")
    public ExchangeTargetingOptionDetailsExchangeEnum exchange;
    public ExchangeTargetingOptionDetails withExchange(ExchangeTargetingOptionDetailsExchangeEnum exchange) {
        this.exchange = exchange;
        return this;
    }
}