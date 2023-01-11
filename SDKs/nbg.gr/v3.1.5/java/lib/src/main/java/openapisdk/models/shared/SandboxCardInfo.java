package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxCardInfo
 * Sandbox card information
**/
public class SandboxCardInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableBalance")
    public Double availableBalance;
    public SandboxCardInfo withAvailableBalance(Double availableBalance) {
        this.availableBalance = availableBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditLimit")
    public Double creditLimit;
    public SandboxCardInfo withCreditLimit(Double creditLimit) {
        this.creditLimit = creditLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SandboxCardInfo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("expiration")
    public String expiration;
    public SandboxCardInfo withExpiration(String expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonProperty("holderName")
    public String holderName;
    public SandboxCardInfo withHolderName(String holderName) {
        this.holderName = holderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ledgerBalance")
    public Double ledgerBalance;
    public SandboxCardInfo withLedgerBalance(Double ledgerBalance) {
        this.ledgerBalance = ledgerBalance;
        return this;
    }
    @JsonProperty("number")
    public String number;
    public SandboxCardInfo withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subType")
    public String subType;
    public SandboxCardInfo withSubType(String subType) {
        this.subType = subType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SandboxCardInfo withType(String type) {
        this.type = type;
        return this;
    }
}