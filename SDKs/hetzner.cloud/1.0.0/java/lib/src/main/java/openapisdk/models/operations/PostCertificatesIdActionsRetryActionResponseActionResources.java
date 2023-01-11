package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostCertificatesIdActionsRetryActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostCertificatesIdActionsRetryActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostCertificatesIdActionsRetryActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}