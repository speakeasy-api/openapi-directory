package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountStatusStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public String active;
    public AccountStatusStatistics withActive(String active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disapproved")
    public String disapproved;
    public AccountStatusStatistics withDisapproved(String disapproved) {
        this.disapproved = disapproved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiring")
    public String expiring;
    public AccountStatusStatistics withExpiring(String expiring) {
        this.expiring = expiring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pending")
    public String pending;
    public AccountStatusStatistics withPending(String pending) {
        this.pending = pending;
        return this;
    }
}