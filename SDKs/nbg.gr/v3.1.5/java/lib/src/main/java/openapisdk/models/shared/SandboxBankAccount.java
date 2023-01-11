package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxBankAccount
 * Sandbox bank account
**/
public class SandboxBankAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beneficiaries")
    public SandboxBeneficiary[] beneficiaries;
    public SandboxBankAccount withBeneficiaries(SandboxBeneficiary[] beneficiaries) {
        this.beneficiaries = beneficiaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public SandboxBankAccountInfo info;
    public SandboxBankAccount withInfo(SandboxBankAccountInfo info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party")
    public SandboxParty party;
    public SandboxBankAccount withParty(SandboxParty party) {
        this.party = party;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledPayments")
    public SandboxScheduledPayment[] scheduledPayments;
    public SandboxBankAccount withScheduledPayments(SandboxScheduledPayment[] scheduledPayments) {
        this.scheduledPayments = scheduledPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standingOrders")
    public SandboxStandingOrder[] standingOrders;
    public SandboxBankAccount withStandingOrders(SandboxStandingOrder[] standingOrders) {
        this.standingOrders = standingOrders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statements")
    public SandboxStatement[] statements;
    public SandboxBankAccount withStatements(SandboxStatement[] statements) {
        this.statements = statements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactions")
    public SandboxTransaction[] transactions;
    public SandboxBankAccount withTransactions(SandboxTransaction[] transactions) {
        this.transactions = transactions;
        return this;
    }
}