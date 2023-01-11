package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchFoldersResponse
 * The response message for searching folders.
**/
public class SearchFoldersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folders")
    public Folder[] folders;
    public SearchFoldersResponse withFolders(Folder[] folders) {
        this.folders = folders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchFoldersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}