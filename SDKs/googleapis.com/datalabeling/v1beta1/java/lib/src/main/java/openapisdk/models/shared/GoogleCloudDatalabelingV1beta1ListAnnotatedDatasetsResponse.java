package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse
 * Results of listing annotated datasets for a dataset.
**/
public class GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotatedDatasets")
    public GoogleCloudDatalabelingV1beta1AnnotatedDataset[] annotatedDatasets;
    public GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse withAnnotatedDatasets(GoogleCloudDatalabelingV1beta1AnnotatedDataset[] annotatedDatasets) {
        this.annotatedDatasets = annotatedDatasets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}