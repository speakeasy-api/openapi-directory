package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectorySitesListResponse
 * Directory Site List Response
**/
public class DirectorySitesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directorySites")
    public DirectorySite[] directorySites;
    public DirectorySitesListResponse withDirectorySites(DirectorySite[] directorySites) {
        this.directorySites = directorySites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DirectorySitesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public DirectorySitesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}