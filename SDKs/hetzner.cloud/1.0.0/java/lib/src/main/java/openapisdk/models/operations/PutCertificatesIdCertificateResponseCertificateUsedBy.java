package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutCertificatesIdCertificateResponseCertificateUsedBy {
    @JsonProperty("id")
    public Long id;
    public PutCertificatesIdCertificateResponseCertificateUsedBy withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PutCertificatesIdCertificateResponseCertificateUsedBy withType(String type) {
        this.type = type;
        return this;
    }
}