package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFoldersResponse
 * The ListFolders response message.
**/
public class ListFoldersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folders")
    public Folder[] folders;
    public ListFoldersResponse withFolders(Folder[] folders) {
        this.folders = folders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFoldersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}