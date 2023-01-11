package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1InputConfig
 * The desired input location and metadata.
**/
public class GoogleCloudVisionV1p2beta1InputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public GoogleCloudVisionV1p2beta1InputConfig withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GoogleCloudVisionV1p2beta1GcsSource gcsSource;
    public GoogleCloudVisionV1p2beta1InputConfig withGcsSource(GoogleCloudVisionV1p2beta1GcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public GoogleCloudVisionV1p2beta1InputConfig withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}