package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1GcsSource
 * The Google Cloud Storage location where the input will be read from.
**/
public class GoogleCloudVisionV1p1beta1GcsSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleCloudVisionV1p1beta1GcsSource withUri(String uri) {
        this.uri = uri;
        return this;
    }
}