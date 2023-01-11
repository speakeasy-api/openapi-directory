package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1ProductSearchResults
 * Results for a product search request.
**/
public class GoogleCloudVisionV1p2beta1ProductSearchResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexTime")
    public String indexTime;
    public GoogleCloudVisionV1p2beta1ProductSearchResults withIndexTime(String indexTime) {
        this.indexTime = indexTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productGroupedResults")
    public GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult[] productGroupedResults;
    public GoogleCloudVisionV1p2beta1ProductSearchResults withProductGroupedResults(GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult[] productGroupedResults) {
        this.productGroupedResults = productGroupedResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GoogleCloudVisionV1p2beta1ProductSearchResultsResult[] results;
    public GoogleCloudVisionV1p2beta1ProductSearchResults withResults(GoogleCloudVisionV1p2beta1ProductSearchResultsResult[] results) {
        this.results = results;
        return this;
    }
}