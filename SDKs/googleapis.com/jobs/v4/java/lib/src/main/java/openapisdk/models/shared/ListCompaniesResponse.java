package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCompaniesResponse
 * The List companies response object.
**/
public class ListCompaniesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companies")
    public Company[] companies;
    public ListCompaniesResponse withCompanies(Company[] companies) {
        this.companies = companies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public ResponseMetadata metadata;
    public ListCompaniesResponse withMetadata(ResponseMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCompaniesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}