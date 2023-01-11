package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublicKey
 * The public key for a given CryptoKeyVersion. Obtained via GetPublicKey.
**/
public class PublicKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public PublicKeyAlgorithmEnum algorithm;
    public PublicKey withAlgorithm(PublicKeyAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PublicKey withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pem")
    public String pem;
    public PublicKey withPem(String pem) {
        this.pem = pem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemCrc32c")
    public String pemCrc32c;
    public PublicKey withPemCrc32c(String pemCrc32c) {
        this.pemCrc32c = pemCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public PublicKeyProtectionLevelEnum protectionLevel;
    public PublicKey withProtectionLevel(PublicKeyProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
}