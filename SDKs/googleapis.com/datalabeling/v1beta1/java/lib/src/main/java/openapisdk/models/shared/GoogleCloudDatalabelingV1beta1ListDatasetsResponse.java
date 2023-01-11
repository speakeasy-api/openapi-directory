package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ListDatasetsResponse
 * Results of listing datasets within a project.
**/
public class GoogleCloudDatalabelingV1beta1ListDatasetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasets")
    public GoogleCloudDatalabelingV1beta1Dataset[] datasets;
    public GoogleCloudDatalabelingV1beta1ListDatasetsResponse withDatasets(GoogleCloudDatalabelingV1beta1Dataset[] datasets) {
        this.datasets = datasets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDatalabelingV1beta1ListDatasetsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}