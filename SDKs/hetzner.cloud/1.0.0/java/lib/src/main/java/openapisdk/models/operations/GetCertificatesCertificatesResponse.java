package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCertificatesCertificatesResponse {
    @JsonProperty("certificates")
    public GetCertificatesCertificatesResponseCertificate[] certificates;
    public GetCertificatesCertificatesResponse withCertificates(GetCertificatesCertificatesResponseCertificate[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetCertificatesCertificatesResponseMeta meta;
    public GetCertificatesCertificatesResponse withMeta(GetCertificatesCertificatesResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}