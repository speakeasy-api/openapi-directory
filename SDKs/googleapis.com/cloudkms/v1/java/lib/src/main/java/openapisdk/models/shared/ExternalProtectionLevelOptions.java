package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExternalProtectionLevelOptions
 * ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
**/
public class ExternalProtectionLevelOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ekmConnectionKeyPath")
    public String ekmConnectionKeyPath;
    public ExternalProtectionLevelOptions withEkmConnectionKeyPath(String ekmConnectionKeyPath) {
        this.ekmConnectionKeyPath = ekmConnectionKeyPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalKeyUri")
    public String externalKeyUri;
    public ExternalProtectionLevelOptions withExternalKeyUri(String externalKeyUri) {
        this.externalKeyUri = externalKeyUri;
        return this;
    }
}