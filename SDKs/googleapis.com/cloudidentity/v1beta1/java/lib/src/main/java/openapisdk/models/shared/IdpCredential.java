package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdpCredential
 * Credential for verifying signatures produced by the Identity Provider.
**/
public class IdpCredential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dsaKeyInfo")
    public DsaPublicKeyInfo dsaKeyInfo;
    public IdpCredential withDsaKeyInfo(DsaPublicKeyInfo dsaKeyInfo) {
        this.dsaKeyInfo = dsaKeyInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IdpCredential withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rsaKeyInfo")
    public RsaPublicKeyInfo rsaKeyInfo;
    public IdpCredential withRsaKeyInfo(RsaPublicKeyInfo rsaKeyInfo) {
        this.rsaKeyInfo = rsaKeyInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public IdpCredential withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}