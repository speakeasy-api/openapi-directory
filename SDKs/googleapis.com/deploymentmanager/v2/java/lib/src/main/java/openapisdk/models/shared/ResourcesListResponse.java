package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourcesListResponse
 * A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.
**/
public class ResourcesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ResourcesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public Resource[] resources;
    public ResourcesListResponse withResources(Resource[] resources) {
        this.resources = resources;
        return this;
    }
}