package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1GcsDestination
 * The Google Cloud Storage location where the output will be written to.
**/
public class GoogleCloudVisionV1p1beta1GcsDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleCloudVisionV1p1beta1GcsDestination withUri(String uri) {
        this.uri = uri;
        return this;
    }
}