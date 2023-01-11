package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MovieMultimedia {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public MovieMultimediaResource resource;
    public MovieMultimedia withResource(MovieMultimediaResource resource) {
        this.resource = resource;
        return this;
    }
}