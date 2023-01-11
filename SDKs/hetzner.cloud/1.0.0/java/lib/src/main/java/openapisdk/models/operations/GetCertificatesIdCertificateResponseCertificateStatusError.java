package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCertificatesIdCertificateResponseCertificateStatusError
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
public class GetCertificatesIdCertificateResponseCertificateStatusError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public GetCertificatesIdCertificateResponseCertificateStatusError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GetCertificatesIdCertificateResponseCertificateStatusError withMessage(String message) {
        this.message = message;
        return this;
    }
}