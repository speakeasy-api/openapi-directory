package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult
 * Information about the products similar to a single product in a query image.
**/
public class GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingPoly")
    public GoogleCloudVisionV1p2beta1BoundingPoly boundingPoly;
    public GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult withBoundingPoly(GoogleCloudVisionV1p2beta1BoundingPoly boundingPoly) {
        this.boundingPoly = boundingPoly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectAnnotations")
    public GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation[] objectAnnotations;
    public GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult withObjectAnnotations(GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation[] objectAnnotations) {
        this.objectAnnotations = objectAnnotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GoogleCloudVisionV1p2beta1ProductSearchResultsResult[] results;
    public GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult withResults(GoogleCloudVisionV1p2beta1ProductSearchResultsResult[] results) {
        this.results = results;
        return this;
    }
}