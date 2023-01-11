package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatFanFundingEventDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountDisplayString")
    public String amountDisplayString;
    public LiveChatFanFundingEventDetails withAmountDisplayString(String amountDisplayString) {
        this.amountDisplayString = amountDisplayString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountMicros")
    public String amountMicros;
    public LiveChatFanFundingEventDetails withAmountMicros(String amountMicros) {
        this.amountMicros = amountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public LiveChatFanFundingEventDetails withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userComment")
    public String userComment;
    public LiveChatFanFundingEventDetails withUserComment(String userComment) {
        this.userComment = userComment;
        return this;
    }
}