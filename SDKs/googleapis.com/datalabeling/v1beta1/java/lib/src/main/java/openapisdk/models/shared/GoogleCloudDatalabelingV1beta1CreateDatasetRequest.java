package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1CreateDatasetRequest
 * Request message for CreateDataset.
**/
public class GoogleCloudDatalabelingV1beta1CreateDatasetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public GoogleCloudDatalabelingV1beta1Dataset dataset;
    public GoogleCloudDatalabelingV1beta1CreateDatasetRequest withDataset(GoogleCloudDatalabelingV1beta1Dataset dataset) {
        this.dataset = dataset;
        return this;
    }
}