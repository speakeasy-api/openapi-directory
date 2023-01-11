package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1OutputConfig
 * The desired output location and metadata.
**/
public class GoogleCloudVisionV1p2beta1OutputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchSize")
    public Integer batchSize;
    public GoogleCloudVisionV1p2beta1OutputConfig withBatchSize(Integer batchSize) {
        this.batchSize = batchSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsDestination")
    public GoogleCloudVisionV1p2beta1GcsDestination gcsDestination;
    public GoogleCloudVisionV1p2beta1OutputConfig withGcsDestination(GoogleCloudVisionV1p2beta1GcsDestination gcsDestination) {
        this.gcsDestination = gcsDestination;
        return this;
    }
}