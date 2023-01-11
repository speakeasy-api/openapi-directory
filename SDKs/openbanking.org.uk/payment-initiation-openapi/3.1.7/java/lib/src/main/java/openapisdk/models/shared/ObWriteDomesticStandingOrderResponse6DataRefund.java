package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticStandingOrderResponse6DataRefund
 * Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
**/
public class ObWriteDomesticStandingOrderResponse6DataRefund {
    @JsonProperty("Account")
    public ObWriteDomesticStandingOrderResponse6DataRefundAccount account;
    public ObWriteDomesticStandingOrderResponse6DataRefund withAccount(ObWriteDomesticStandingOrderResponse6DataRefundAccount account) {
        this.account = account;
        return this;
    }
}