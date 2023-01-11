package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1GcsSource
 * Source of the Cloud Storage file to be imported.
**/
public class GoogleCloudDatalabelingV1beta1GcsSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputUri")
    public String inputUri;
    public GoogleCloudDatalabelingV1beta1GcsSource withInputUri(String inputUri) {
        this.inputUri = inputUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public GoogleCloudDatalabelingV1beta1GcsSource withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}