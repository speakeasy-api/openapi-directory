package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDockerImagesResponse
 * The response from listing docker images.
**/
public class ListDockerImagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerImages")
    public DockerImage[] dockerImages;
    public ListDockerImagesResponse withDockerImages(DockerImage[] dockerImages) {
        this.dockerImages = dockerImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDockerImagesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}