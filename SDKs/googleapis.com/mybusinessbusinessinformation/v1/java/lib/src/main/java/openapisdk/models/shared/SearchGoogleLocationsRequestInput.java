package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchGoogleLocationsRequestInput
 * Request message for GoogleLocations.SearchGoogleLocations.
**/
public class SearchGoogleLocationsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public LocationInput location;
    public SearchGoogleLocationsRequestInput withLocation(LocationInput location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public SearchGoogleLocationsRequestInput withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public SearchGoogleLocationsRequestInput withQuery(String query) {
        this.query = query;
        return this;
    }
}