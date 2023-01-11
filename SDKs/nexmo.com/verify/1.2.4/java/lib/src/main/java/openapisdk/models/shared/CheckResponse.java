package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckResponse
 * Success
**/
public class CheckResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public CheckResponse withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimated_price_messages_sent")
    public String estimatedPriceMessagesSent;
    public CheckResponse withEstimatedPriceMessagesSent(String estimatedPriceMessagesSent) {
        this.estimatedPriceMessagesSent = estimatedPriceMessagesSent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_id")
    public String eventId;
    public CheckResponse withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public String price;
    public CheckResponse withPrice(String price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public CheckResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public CheckResponse withStatus(String status) {
        this.status = status;
        return this;
    }
}