package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendTokenRequestMetadataRules
 * Object describing token rules
**/
public class SendTokenRequestMetadataRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiration")
    public SendTokenRequestMetadataRulesExpiration expiration;
    public SendTokenRequestMetadataRules withExpiration(SendTokenRequestMetadataRulesExpiration expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fees")
    public SendTokenRequestMetadataRulesFees fees;
    public SendTokenRequestMetadataRules withFees(SendTokenRequestMetadataRulesFees fees) {
        this.fees = fees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holders")
    public SendTokenRequestMetadataRulesHolders[] holders;
    public SendTokenRequestMetadataRules withHolders(SendTokenRequestMetadataRulesHolders[] holders) {
        this.holders = holders;
        return this;
    }
}