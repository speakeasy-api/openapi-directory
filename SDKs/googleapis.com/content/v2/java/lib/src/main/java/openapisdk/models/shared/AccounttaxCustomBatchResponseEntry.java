package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccounttaxCustomBatchResponseEntry
 * A batch entry encoding a single non-batch accounttax response.
**/
public class AccounttaxCustomBatchResponseEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountTax")
    public AccountTax accountTax;
    public AccounttaxCustomBatchResponseEntry withAccountTax(AccountTax accountTax) {
        this.accountTax = accountTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public AccounttaxCustomBatchResponseEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors errors;
    public AccounttaxCustomBatchResponseEntry withErrors(Errors errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccounttaxCustomBatchResponseEntry withKind(String kind) {
        this.kind = kind;
        return this;
    }
}