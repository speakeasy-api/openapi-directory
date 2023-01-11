package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccounttaxCustomBatchRequestEntry
 * A batch entry encoding a single non-batch accounttax request.
**/
public class AccounttaxCustomBatchRequestEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public AccounttaxCustomBatchRequestEntry withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountTax")
    public AccountTax accountTax;
    public AccounttaxCustomBatchRequestEntry withAccountTax(AccountTax accountTax) {
        this.accountTax = accountTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public AccounttaxCustomBatchRequestEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public AccounttaxCustomBatchRequestEntry withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public AccounttaxCustomBatchRequestEntry withMethod(String method) {
        this.method = method;
        return this;
    }
}