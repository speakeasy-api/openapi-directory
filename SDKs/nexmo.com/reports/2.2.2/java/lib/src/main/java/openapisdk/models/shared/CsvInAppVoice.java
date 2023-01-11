package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CsvInAppVoice
 * In App Voice
**/
public class CsvInAppVoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public CsvInAppVoice withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application_id")
    public String applicationId;
    public CsvInAppVoice withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public CsvInAppVoice withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_id")
    public String conversationId;
    public CsvInAppVoice withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public CsvInAppVoice withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_end")
    public LocalDate dateEnd;
    public CsvInAppVoice withDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_start")
    public LocalDate dateStart;
    public CsvInAppVoice withDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public CsvInAppVoice withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CsvInAppVoice withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leg_id")
    public String legId;
    public CsvInAppVoice withLegId(String legId) {
        this.legId = legId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public CsvInAppVoice withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public CsvInAppVoice withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public CsvInAppVoice withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_price")
    public Double totalPrice;
    public CsvInAppVoice withTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public CsvInAppVoice withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}