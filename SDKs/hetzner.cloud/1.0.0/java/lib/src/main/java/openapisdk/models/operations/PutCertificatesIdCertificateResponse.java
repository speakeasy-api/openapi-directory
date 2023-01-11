package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutCertificatesIdCertificateResponse {
    @JsonProperty("certificate")
    public PutCertificatesIdCertificateResponseCertificate certificate;
    public PutCertificatesIdCertificateResponse withCertificate(PutCertificatesIdCertificateResponseCertificate certificate) {
        this.certificate = certificate;
        return this;
    }
}