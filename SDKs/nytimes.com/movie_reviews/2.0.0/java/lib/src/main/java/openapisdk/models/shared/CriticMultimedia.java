package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CriticMultimedia {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public CriticMultimediaResource resource;
    public CriticMultimedia withResource(CriticMultimediaResource resource) {
        this.resource = resource;
        return this;
    }
}