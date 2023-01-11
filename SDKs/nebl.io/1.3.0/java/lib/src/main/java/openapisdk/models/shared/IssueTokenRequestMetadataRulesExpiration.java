package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IssueTokenRequestMetadataRulesExpiration
 * Object describing expiration rules of the token
**/
public class IssueTokenRequestMetadataRulesExpiration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public IssueTokenRequestMetadataRulesExpiration withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validUntil")
    public Double validUntil;
    public IssueTokenRequestMetadataRulesExpiration withValidUntil(Double validUntil) {
        this.validUntil = validUntil;
        return this;
    }
}