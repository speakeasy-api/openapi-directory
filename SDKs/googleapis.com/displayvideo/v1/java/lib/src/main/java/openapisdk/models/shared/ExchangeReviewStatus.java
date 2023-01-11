package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExchangeReviewStatus
 * Exchange review status for the creative.
**/
public class ExchangeReviewStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchange")
    public ExchangeReviewStatusExchangeEnum exchange;
    public ExchangeReviewStatus withExchange(ExchangeReviewStatusExchangeEnum exchange) {
        this.exchange = exchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ExchangeReviewStatusStatusEnum status;
    public ExchangeReviewStatus withStatus(ExchangeReviewStatusStatusEnum status) {
        this.status = status;
        return this;
    }
}