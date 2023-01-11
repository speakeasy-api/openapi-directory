package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1GcsDestination
 * Export destination of the data.Only gcs path is allowed in output_uri.
**/
public class GoogleCloudDatalabelingV1beta1GcsDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public GoogleCloudDatalabelingV1beta1GcsDestination withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputUri")
    public String outputUri;
    public GoogleCloudDatalabelingV1beta1GcsDestination withOutputUri(String outputUri) {
        this.outputUri = outputUri;
        return this;
    }
}