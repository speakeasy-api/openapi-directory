package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuggestedTagAndRegionQuery
 * The array of result images and token containing session and continuation Ids for the next query.
**/
public class SuggestedTagAndRegionQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public StoredSuggestedTagAndRegion[] results;
    public SuggestedTagAndRegionQuery withResults(StoredSuggestedTagAndRegion[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public SuggestedTagAndRegionQueryToken token;
    public SuggestedTagAndRegionQuery withToken(SuggestedTagAndRegionQueryToken token) {
        this.token = token;
        return this;
    }
}