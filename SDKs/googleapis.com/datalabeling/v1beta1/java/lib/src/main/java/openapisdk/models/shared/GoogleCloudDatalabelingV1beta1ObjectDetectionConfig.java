package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ObjectDetectionConfig
 * Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate.
**/
public class GoogleCloudDatalabelingV1beta1ObjectDetectionConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSet")
    public String annotationSpecSet;
    public GoogleCloudDatalabelingV1beta1ObjectDetectionConfig withAnnotationSpecSet(String annotationSpecSet) {
        this.annotationSpecSet = annotationSpecSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractionFrameRate")
    public Double extractionFrameRate;
    public GoogleCloudDatalabelingV1beta1ObjectDetectionConfig withExtractionFrameRate(Double extractionFrameRate) {
        this.extractionFrameRate = extractionFrameRate;
        return this;
    }
}