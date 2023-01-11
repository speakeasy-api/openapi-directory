package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendTokenRequestMetadataRulesExpiration
 * Object describing expiration rules of the token
**/
public class SendTokenRequestMetadataRulesExpiration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public SendTokenRequestMetadataRulesExpiration withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validUntil")
    public Double validUntil;
    public SendTokenRequestMetadataRulesExpiration withValidUntil(Double validUntil) {
        this.validUntil = validUntil;
        return this;
    }
}