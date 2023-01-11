package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation
 * Image segmentation annotation.
**/
public class GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationColors")
    public java.util.Map<String, GoogleCloudDatalabelingV1beta1AnnotationSpec> annotationColors;
    public GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation withAnnotationColors(java.util.Map<String, GoogleCloudDatalabelingV1beta1AnnotationSpec> annotationColors) {
        this.annotationColors = annotationColors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageBytes")
    public String imageBytes;
    public GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation withImageBytes(String imageBytes) {
        this.imageBytes = imageBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}