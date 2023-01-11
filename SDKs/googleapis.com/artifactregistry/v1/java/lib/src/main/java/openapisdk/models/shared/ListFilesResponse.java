package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFilesResponse
 * The response from listing files.
**/
public class ListFilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public GoogleDevtoolsArtifactregistryV1File[] files;
    public ListFilesResponse withFiles(GoogleDevtoolsArtifactregistryV1File[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFilesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}