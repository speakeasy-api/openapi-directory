package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1Image
 * Client image to perform Google Cloud Vision API tasks over.
**/
public class GoogleCloudVisionV1p2beta1Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public GoogleCloudVisionV1p2beta1Image withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public GoogleCloudVisionV1p2beta1ImageSource source;
    public GoogleCloudVisionV1p2beta1Image withSource(GoogleCloudVisionV1p2beta1ImageSource source) {
        this.source = source;
        return this;
    }
}