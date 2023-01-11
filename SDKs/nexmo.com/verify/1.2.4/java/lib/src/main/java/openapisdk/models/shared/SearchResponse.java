package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResponse
 * Success
**/
public class SearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public SearchResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checks")
    public SearchResponseChecks[] checks;
    public SearchResponse withChecks(SearchResponseChecks[] checks) {
        this.checks = checks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public SearchResponse withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_finalized")
    public String dateFinalized;
    public SearchResponse withDateFinalized(String dateFinalized) {
        this.dateFinalized = dateFinalized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_submitted")
    public String dateSubmitted;
    public SearchResponse withDateSubmitted(String dateSubmitted) {
        this.dateSubmitted = dateSubmitted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimated_price_messages_sent")
    public String estimatedPriceMessagesSent;
    public SearchResponse withEstimatedPriceMessagesSent(String estimatedPriceMessagesSent) {
        this.estimatedPriceMessagesSent = estimatedPriceMessagesSent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public SearchResponseEvents[] events;
    public SearchResponse withEvents(SearchResponseEvents[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_event_date")
    public String firstEventDate;
    public SearchResponse withFirstEventDate(String firstEventDate) {
        this.firstEventDate = firstEventDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_event_date")
    public String lastEventDate;
    public SearchResponse withLastEventDate(String lastEventDate) {
        this.lastEventDate = lastEventDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public SearchResponse withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public String price;
    public SearchResponse withPrice(String price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public SearchResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sender_id")
    public String senderId;
    public SearchResponse withSenderId(String senderId) {
        this.senderId = senderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SearchResponseStatusEnum status;
    public SearchResponse withStatus(SearchResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}