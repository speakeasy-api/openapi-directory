package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchOrganizationsRequest
 * The request sent to the `SearchOrganizations` method.
**/
public class SearchOrganizationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public SearchOrganizationsRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public SearchOrganizationsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public SearchOrganizationsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}