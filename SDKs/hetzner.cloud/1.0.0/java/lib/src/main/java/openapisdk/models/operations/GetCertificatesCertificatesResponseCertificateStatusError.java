package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCertificatesCertificatesResponseCertificateStatusError
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
public class GetCertificatesCertificatesResponseCertificateStatusError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public GetCertificatesCertificatesResponseCertificateStatusError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GetCertificatesCertificatesResponseCertificateStatusError withMessage(String message) {
        this.message = message;
        return this;
    }
}