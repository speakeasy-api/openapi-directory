package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCertificatesIdCertificateResponse {
    @JsonProperty("certificate")
    public GetCertificatesIdCertificateResponseCertificate certificate;
    public GetCertificatesIdCertificateResponse withCertificate(GetCertificatesIdCertificateResponseCertificate certificate) {
        this.certificate = certificate;
        return this;
    }
}