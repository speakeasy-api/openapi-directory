package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1Example
 * An Example is a piece of data and its annotation. For example, an image with label "house".
**/
public class GoogleCloudDatalabelingV1beta1Example {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public GoogleCloudDatalabelingV1beta1Annotation[] annotations;
    public GoogleCloudDatalabelingV1beta1Example withAnnotations(GoogleCloudDatalabelingV1beta1Annotation[] annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imagePayload")
    public GoogleCloudDatalabelingV1beta1ImagePayload imagePayload;
    public GoogleCloudDatalabelingV1beta1Example withImagePayload(GoogleCloudDatalabelingV1beta1ImagePayload imagePayload) {
        this.imagePayload = imagePayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDatalabelingV1beta1Example withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textPayload")
    public GoogleCloudDatalabelingV1beta1TextPayload textPayload;
    public GoogleCloudDatalabelingV1beta1Example withTextPayload(GoogleCloudDatalabelingV1beta1TextPayload textPayload) {
        this.textPayload = textPayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoPayload")
    public GoogleCloudDatalabelingV1beta1VideoPayload videoPayload;
    public GoogleCloudDatalabelingV1beta1Example withVideoPayload(GoogleCloudDatalabelingV1beta1VideoPayload videoPayload) {
        this.videoPayload = videoPayload;
        return this;
    }
}