package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCertificatesIdActionsActionIdActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetCertificatesIdActionsActionIdActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetCertificatesIdActionsActionIdActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}