package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IssueTokenRequestMetadataRules
 * Object describing token rules
**/
public class IssueTokenRequestMetadataRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiration")
    public IssueTokenRequestMetadataRulesExpiration expiration;
    public IssueTokenRequestMetadataRules withExpiration(IssueTokenRequestMetadataRulesExpiration expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fees")
    public IssueTokenRequestMetadataRulesFees fees;
    public IssueTokenRequestMetadataRules withFees(IssueTokenRequestMetadataRulesFees fees) {
        this.fees = fees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holders")
    public IssueTokenRequestMetadataRulesHolders[] holders;
    public IssueTokenRequestMetadataRules withHolders(IssueTokenRequestMetadataRulesHolders[] holders) {
        this.holders = holders;
        return this;
    }
}