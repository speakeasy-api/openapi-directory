package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCertificatesIdCertificateResponseCertificateUsedBy {
    @JsonProperty("id")
    public Long id;
    public GetCertificatesIdCertificateResponseCertificateUsedBy withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetCertificatesIdCertificateResponseCertificateUsedBy withType(String type) {
        this.type = type;
        return this;
    }
}