package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CryptoKeyVersionTemplate
 * A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.
**/
public class CryptoKeyVersionTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public CryptoKeyVersionTemplateAlgorithmEnum algorithm;
    public CryptoKeyVersionTemplate withAlgorithm(CryptoKeyVersionTemplateAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public CryptoKeyVersionTemplateProtectionLevelEnum protectionLevel;
    public CryptoKeyVersionTemplate withProtectionLevel(CryptoKeyVersionTemplateProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
}