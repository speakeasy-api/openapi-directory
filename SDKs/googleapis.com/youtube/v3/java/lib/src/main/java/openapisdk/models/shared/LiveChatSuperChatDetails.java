package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatSuperChatDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountDisplayString")
    public String amountDisplayString;
    public LiveChatSuperChatDetails withAmountDisplayString(String amountDisplayString) {
        this.amountDisplayString = amountDisplayString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountMicros")
    public String amountMicros;
    public LiveChatSuperChatDetails withAmountMicros(String amountMicros) {
        this.amountMicros = amountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public LiveChatSuperChatDetails withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public Long tier;
    public LiveChatSuperChatDetails withTier(Long tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userComment")
    public String userComment;
    public LiveChatSuperChatDetails withUserComment(String userComment) {
        this.userComment = userComment;
        return this;
    }
}