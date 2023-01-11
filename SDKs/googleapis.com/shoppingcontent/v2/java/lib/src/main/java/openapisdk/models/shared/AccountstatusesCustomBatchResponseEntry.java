package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountstatusesCustomBatchResponseEntry
 * A batch entry encoding a single non-batch accountstatuses response.
**/
public class AccountstatusesCustomBatchResponseEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountStatus")
    public AccountStatus accountStatus;
    public AccountstatusesCustomBatchResponseEntry withAccountStatus(AccountStatus accountStatus) {
        this.accountStatus = accountStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public AccountstatusesCustomBatchResponseEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors errors;
    public AccountstatusesCustomBatchResponseEntry withErrors(Errors errors) {
        this.errors = errors;
        return this;
    }
}