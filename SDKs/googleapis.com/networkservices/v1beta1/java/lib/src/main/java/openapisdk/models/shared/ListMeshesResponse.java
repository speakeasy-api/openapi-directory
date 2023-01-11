package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMeshesResponse
 * Response returned by the ListMeshes method.
**/
public class ListMeshesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshes")
    public Mesh[] meshes;
    public ListMeshesResponse withMeshes(Mesh[] meshes) {
        this.meshes = meshes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListMeshesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}