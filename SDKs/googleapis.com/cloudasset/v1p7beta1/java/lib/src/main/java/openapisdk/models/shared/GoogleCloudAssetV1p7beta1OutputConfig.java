package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssetV1p7beta1OutputConfig
 * Output configuration for export assets destination.
**/
public class GoogleCloudAssetV1p7beta1OutputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigqueryDestination")
    public GoogleCloudAssetV1p7beta1BigQueryDestination bigqueryDestination;
    public GoogleCloudAssetV1p7beta1OutputConfig withBigqueryDestination(GoogleCloudAssetV1p7beta1BigQueryDestination bigqueryDestination) {
        this.bigqueryDestination = bigqueryDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsDestination")
    public GoogleCloudAssetV1p7beta1GcsDestination gcsDestination;
    public GoogleCloudAssetV1p7beta1OutputConfig withGcsDestination(GoogleCloudAssetV1p7beta1GcsDestination gcsDestination) {
        this.gcsDestination = gcsDestination;
        return this;
    }
}