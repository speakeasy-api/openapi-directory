package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BuildArtifact
 * Description of an a image to use during Skaffold rendering.
**/
public class BuildArtifact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public BuildArtifact withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public BuildArtifact withTag(String tag) {
        this.tag = tag;
        return this;
    }
}