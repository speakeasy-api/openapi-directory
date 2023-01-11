package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxCard
 * Sandbox card
**/
public class SandboxCard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public SandboxCardInfo info;
    public SandboxCard withInfo(SandboxCardInfo info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party")
    public SandboxParty party;
    public SandboxCard withParty(SandboxParty party) {
        this.party = party;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statements")
    public SandboxStatement[] statements;
    public SandboxCard withStatements(SandboxStatement[] statements) {
        this.statements = statements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactions")
    public SandboxTransaction[] transactions;
    public SandboxCard withTransactions(SandboxTransaction[] transactions) {
        this.transactions = transactions;
        return this;
    }
}