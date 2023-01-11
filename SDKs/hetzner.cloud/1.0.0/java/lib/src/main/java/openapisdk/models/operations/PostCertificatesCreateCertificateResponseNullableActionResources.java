package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostCertificatesCreateCertificateResponseNullableActionResources {
    @JsonProperty("id")
    public Long id;
    public PostCertificatesCreateCertificateResponseNullableActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostCertificatesCreateCertificateResponseNullableActionResources withType(String type) {
        this.type = type;
        return this;
    }
}