package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExternalAccountIdentifiers
 * User account identifier in the third-party service.
**/
public class ExternalAccountIdentifiers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalAccountId")
    public String externalAccountId;
    public ExternalAccountIdentifiers withExternalAccountId(String externalAccountId) {
        this.externalAccountId = externalAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscatedExternalAccountId")
    public String obfuscatedExternalAccountId;
    public ExternalAccountIdentifiers withObfuscatedExternalAccountId(String obfuscatedExternalAccountId) {
        this.obfuscatedExternalAccountId = obfuscatedExternalAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscatedExternalProfileId")
    public String obfuscatedExternalProfileId;
    public ExternalAccountIdentifiers withObfuscatedExternalProfileId(String obfuscatedExternalProfileId) {
        this.obfuscatedExternalProfileId = obfuscatedExternalProfileId;
        return this;
    }
}