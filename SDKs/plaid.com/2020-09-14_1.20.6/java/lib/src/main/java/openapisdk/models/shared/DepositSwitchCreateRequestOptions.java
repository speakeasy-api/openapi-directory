package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DepositSwitchCreateRequestOptions
 * Options to configure the `/deposit_switch/create` request. If provided, cannot be `null`.
**/
public class DepositSwitchCreateRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction_item_access_tokens")
    public String[] transactionItemAccessTokens;
    public DepositSwitchCreateRequestOptions withTransactionItemAccessTokens(String[] transactionItemAccessTokens) {
        this.transactionItemAccessTokens = transactionItemAccessTokens;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook")
    public String webhook;
    public DepositSwitchCreateRequestOptions withWebhook(String webhook) {
        this.webhook = webhook;
        return this;
    }
}