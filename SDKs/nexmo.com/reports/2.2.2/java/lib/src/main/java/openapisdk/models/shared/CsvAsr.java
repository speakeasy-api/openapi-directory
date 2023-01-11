package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CsvAsr
 * ASR
**/
public class CsvAsr {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public CsvAsr withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_date_start")
    public LocalDate callDateStart;
    public CsvAsr withCallDateStart(LocalDate callDateStart) {
        this.callDateStart = callDateStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_id")
    public String callId;
    public CsvAsr withCallId(String callId) {
        this.callId = callId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public CsvAsr withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_end")
    public LocalDate dateEnd;
    public CsvAsr withDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_start")
    public LocalDate dateStart;
    public CsvAsr withDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public DirectionEnum direction;
    public CsvAsr withDirection(DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public CsvAsr withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public CsvAsr withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public CsvAsr withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AsrStatusEnum status;
    public CsvAsr withStatus(AsrStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_description")
    public String statusDescription;
    public CsvAsr withStatusDescription(String statusDescription) {
        this.statusDescription = statusDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public CsvAsr withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_price")
    public Double totalPrice;
    public CsvAsr withTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
}