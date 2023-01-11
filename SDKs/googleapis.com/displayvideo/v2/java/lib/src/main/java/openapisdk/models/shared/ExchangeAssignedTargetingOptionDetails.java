package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExchangeAssignedTargetingOptionDetails
 * Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.
**/
public class ExchangeAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchange")
    public ExchangeAssignedTargetingOptionDetailsExchangeEnum exchange;
    public ExchangeAssignedTargetingOptionDetails withExchange(ExchangeAssignedTargetingOptionDetailsExchangeEnum exchange) {
        this.exchange = exchange;
        return this;
    }
}