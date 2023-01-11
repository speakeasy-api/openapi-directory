package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerInfo
 * Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment.
**/
public class ContainerInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public ContainerInfo withImage(String image) {
        this.image = image;
        return this;
    }
}