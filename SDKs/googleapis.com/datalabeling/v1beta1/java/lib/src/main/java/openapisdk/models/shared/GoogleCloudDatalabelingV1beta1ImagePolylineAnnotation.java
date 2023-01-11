package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation
 * A polyline for the image annotation.
**/
public class GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpec")
    public GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec;
    public GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation withAnnotationSpec(GoogleCloudDatalabelingV1beta1AnnotationSpec annotationSpec) {
        this.annotationSpec = annotationSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("normalizedPolyline")
    public GoogleCloudDatalabelingV1beta1NormalizedPolyline normalizedPolyline;
    public GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation withNormalizedPolyline(GoogleCloudDatalabelingV1beta1NormalizedPolyline normalizedPolyline) {
        this.normalizedPolyline = normalizedPolyline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polyline")
    public GoogleCloudDatalabelingV1beta1Polyline polyline;
    public GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation withPolyline(GoogleCloudDatalabelingV1beta1Polyline polyline) {
        this.polyline = polyline;
        return this;
    }
}