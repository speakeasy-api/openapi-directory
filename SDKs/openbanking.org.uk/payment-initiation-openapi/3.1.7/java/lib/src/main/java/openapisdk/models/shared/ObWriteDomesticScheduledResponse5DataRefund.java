package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticScheduledResponse5DataRefund
 * Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
**/
public class ObWriteDomesticScheduledResponse5DataRefund {
    @JsonProperty("Account")
    public ObWriteDomesticScheduledResponse5DataRefundAccount account;
    public ObWriteDomesticScheduledResponse5DataRefund withAccount(ObWriteDomesticScheduledResponse5DataRefundAccount account) {
        this.account = account;
        return this;
    }
}