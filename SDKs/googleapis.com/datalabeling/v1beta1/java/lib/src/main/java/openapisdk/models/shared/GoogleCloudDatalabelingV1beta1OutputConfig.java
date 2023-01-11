package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1OutputConfig
 * The configuration of output data.
**/
public class GoogleCloudDatalabelingV1beta1OutputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsDestination")
    public GoogleCloudDatalabelingV1beta1GcsDestination gcsDestination;
    public GoogleCloudDatalabelingV1beta1OutputConfig withGcsDestination(GoogleCloudDatalabelingV1beta1GcsDestination gcsDestination) {
        this.gcsDestination = gcsDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsFolderDestination")
    public GoogleCloudDatalabelingV1beta1GcsFolderDestination gcsFolderDestination;
    public GoogleCloudDatalabelingV1beta1OutputConfig withGcsFolderDestination(GoogleCloudDatalabelingV1beta1GcsFolderDestination gcsFolderDestination) {
        this.gcsFolderDestination = gcsFolderDestination;
        return this;
    }
}