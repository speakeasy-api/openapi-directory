package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CsvConversations
 * Conversations
**/
public class CsvConversations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public CsvConversations withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application_id")
    public String applicationId;
    public CsvConversations withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public CsvConversations withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_id")
    public String conversationId;
    public CsvConversations withConversationId(String conversationId) {
        this.conversationId = conversationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creation_date")
    public LocalDate creationDate;
    public CsvConversations withCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public CsvConversations withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CsvConversations withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public CsvConversations withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public CsvConversations withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_price")
    public Double totalPrice;
    public CsvConversations withTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public CsvConversations withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}