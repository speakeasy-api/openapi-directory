package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CsvWebsockets
 * WebSocket Call
**/
public class CsvWebsockets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public CsvWebsockets withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_id")
    public String callId;
    public CsvWebsockets withCallId(String callId) {
        this.callId = callId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public CsvWebsockets withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_end")
    public LocalDate dateEnd;
    public CsvWebsockets withDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_start")
    public LocalDate dateStart;
    public CsvWebsockets withDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public CsvWebsockets withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public CsvWebsockets withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public CsvWebsockets withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_price")
    public Double totalPrice;
    public CsvWebsockets withTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
}