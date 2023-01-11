package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin")
    public Boolean admin;
    public AccountUser withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public AccountUser withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderManager")
    public Boolean orderManager;
    public AccountUser withOrderManager(Boolean orderManager) {
        this.orderManager = orderManager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentsAnalyst")
    public Boolean paymentsAnalyst;
    public AccountUser withPaymentsAnalyst(Boolean paymentsAnalyst) {
        this.paymentsAnalyst = paymentsAnalyst;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentsManager")
    public Boolean paymentsManager;
    public AccountUser withPaymentsManager(Boolean paymentsManager) {
        this.paymentsManager = paymentsManager;
        return this;
    }
}