package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostCertificatesCreateCertificateResponseCertificateUsedBy {
    @JsonProperty("id")
    public Long id;
    public PostCertificatesCreateCertificateResponseCertificateUsedBy withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostCertificatesCreateCertificateResponseCertificateUsedBy withType(String type) {
        this.type = type;
        return this;
    }
}