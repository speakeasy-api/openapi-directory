package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1ImageSource
 * External image source (Google Cloud Storage or web URL image location).
**/
public class GoogleCloudVisionV1p1beta1ImageSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsImageUri")
    public String gcsImageUri;
    public GoogleCloudVisionV1p1beta1ImageSource withGcsImageUri(String gcsImageUri) {
        this.gcsImageUri = gcsImageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUri")
    public String imageUri;
    public GoogleCloudVisionV1p1beta1ImageSource withImageUri(String imageUri) {
        this.imageUri = imageUri;
        return this;
    }
}