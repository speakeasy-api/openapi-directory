package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse
 * Results of listing annotation spec set under a project.
**/
public class GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSets")
    public GoogleCloudDatalabelingV1beta1AnnotationSpecSet[] annotationSpecSets;
    public GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse withAnnotationSpecSets(GoogleCloudDatalabelingV1beta1AnnotationSpecSet[] annotationSpecSets) {
        this.annotationSpecSets = annotationSpecSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}