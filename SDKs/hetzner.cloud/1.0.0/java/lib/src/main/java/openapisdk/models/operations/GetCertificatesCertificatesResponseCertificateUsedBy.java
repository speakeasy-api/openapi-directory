package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCertificatesCertificatesResponseCertificateUsedBy {
    @JsonProperty("id")
    public Long id;
    public GetCertificatesCertificatesResponseCertificateUsedBy withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetCertificatesCertificatesResponseCertificateUsedBy withType(String type) {
        this.type = type;
        return this;
    }
}