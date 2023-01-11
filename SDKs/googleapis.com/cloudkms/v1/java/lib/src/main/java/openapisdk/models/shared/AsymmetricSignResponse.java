package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AsymmetricSignResponse
 * Response message for KeyManagementService.AsymmetricSign.
**/
public class AsymmetricSignResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AsymmetricSignResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public AsymmetricSignResponseProtectionLevelEnum protectionLevel;
    public AsymmetricSignResponse withProtectionLevel(AsymmetricSignResponseProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signature")
    public String signature;
    public AsymmetricSignResponse withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureCrc32c")
    public String signatureCrc32c;
    public AsymmetricSignResponse withSignatureCrc32c(String signatureCrc32c) {
        this.signatureCrc32c = signatureCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedDataCrc32c")
    public Boolean verifiedDataCrc32c;
    public AsymmetricSignResponse withVerifiedDataCrc32c(Boolean verifiedDataCrc32c) {
        this.verifiedDataCrc32c = verifiedDataCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedDigestCrc32c")
    public Boolean verifiedDigestCrc32c;
    public AsymmetricSignResponse withVerifiedDigestCrc32c(Boolean verifiedDigestCrc32c) {
        this.verifiedDigestCrc32c = verifiedDigestCrc32c;
        return this;
    }
}