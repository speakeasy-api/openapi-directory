package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVersionFilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public VersionFile[] files;
    public ListVersionFilesResponse withFiles(VersionFile[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListVersionFilesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}