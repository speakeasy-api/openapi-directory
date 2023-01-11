package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpsertAccountRequestBodyIdentification
 * Account identification requires an accountId, domain or both
**/
public class UpsertAccountRequestBodyIdentification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public UpsertAccountRequestBodyIdentification withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public UpsertAccountRequestBodyIdentification withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}