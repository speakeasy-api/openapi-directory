package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchOrganizationsResponse
 * The response returned from the `SearchOrganizations` method.
**/
public class SearchOrganizationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchOrganizationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizations")
    public Organization[] organizations;
    public SearchOrganizationsResponse withOrganizations(Organization[] organizations) {
        this.organizations = organizations;
        return this;
    }
}