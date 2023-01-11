package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Messages
 * Messages
**/
public class Messages {
    @JsonProperty("account_id")
    public String accountId;
    public Messages withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public Messages withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_end")
    public LocalDate dateEnd;
    public Messages withDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_start")
    public LocalDate dateStart;
    public Messages withDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @JsonProperty("direction")
    public DirectionEnum direction;
    public Messages withDirection(DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public Messages withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Messages withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_message")
    public Boolean includeMessage;
    public Messages withIncludeMessage(Boolean includeMessage) {
        this.includeMessage = includeMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_subaccounts")
    public Boolean includeSubaccounts;
    public Messages withIncludeSubaccounts(Boolean includeSubaccounts) {
        this.includeSubaccounts = includeSubaccounts;
        return this;
    }
    @JsonProperty("product")
    public ProductMessagesEnum product;
    public Messages withProduct(ProductMessagesEnum product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public Messages withTo(String to) {
        this.to = to;
        return this;
    }
}