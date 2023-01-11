package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchProjectsResponse
 * A page of the response received from the SearchProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
**/
public class SearchProjectsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchProjectsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projects")
    public Project[] projects;
    public SearchProjectsResponse withProjects(Project[] projects) {
        this.projects = projects;
        return this;
    }
}