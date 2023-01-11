package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ObWriteDomesticResponse5DataRefund
 * Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
**/
public class ObWriteDomesticResponse5DataRefund {
    @JsonProperty("Account")
    public ObWriteDomesticResponse5DataRefundAccount account;
    public ObWriteDomesticResponse5DataRefund withAccount(ObWriteDomesticResponse5DataRefundAccount account) {
        this.account = account;
        return this;
    }
}