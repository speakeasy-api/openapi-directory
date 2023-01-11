package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtendedKeyUsageOptions
 * KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.
**/
public class ExtendedKeyUsageOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientAuth")
    public Boolean clientAuth;
    public ExtendedKeyUsageOptions withClientAuth(Boolean clientAuth) {
        this.clientAuth = clientAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codeSigning")
    public Boolean codeSigning;
    public ExtendedKeyUsageOptions withCodeSigning(Boolean codeSigning) {
        this.codeSigning = codeSigning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailProtection")
    public Boolean emailProtection;
    public ExtendedKeyUsageOptions withEmailProtection(Boolean emailProtection) {
        this.emailProtection = emailProtection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ocspSigning")
    public Boolean ocspSigning;
    public ExtendedKeyUsageOptions withOcspSigning(Boolean ocspSigning) {
        this.ocspSigning = ocspSigning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverAuth")
    public Boolean serverAuth;
    public ExtendedKeyUsageOptions withServerAuth(Boolean serverAuth) {
        this.serverAuth = serverAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeStamping")
    public Boolean timeStamping;
    public ExtendedKeyUsageOptions withTimeStamping(Boolean timeStamping) {
        this.timeStamping = timeStamping;
        return this;
    }
}