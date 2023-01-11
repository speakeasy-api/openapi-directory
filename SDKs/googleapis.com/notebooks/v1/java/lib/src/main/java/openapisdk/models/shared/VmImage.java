package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmImage
 * Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.
**/
public class VmImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageFamily")
    public String imageFamily;
    public VmImage withImageFamily(String imageFamily) {
        this.imageFamily = imageFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageName")
    public String imageName;
    public VmImage withImageName(String imageName) {
        this.imageName = imageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public VmImage withProject(String project) {
        this.project = project;
        return this;
    }
}