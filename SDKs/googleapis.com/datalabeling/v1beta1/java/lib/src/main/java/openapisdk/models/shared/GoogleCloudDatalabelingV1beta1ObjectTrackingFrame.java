package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ObjectTrackingFrame
 * Video frame level annotation for object detection and tracking.
**/
public class GoogleCloudDatalabelingV1beta1ObjectTrackingFrame {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingPoly")
    public GoogleCloudDatalabelingV1beta1BoundingPoly boundingPoly;
    public GoogleCloudDatalabelingV1beta1ObjectTrackingFrame withBoundingPoly(GoogleCloudDatalabelingV1beta1BoundingPoly boundingPoly) {
        this.boundingPoly = boundingPoly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("normalizedBoundingPoly")
    public GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly normalizedBoundingPoly;
    public GoogleCloudDatalabelingV1beta1ObjectTrackingFrame withNormalizedBoundingPoly(GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly normalizedBoundingPoly) {
        this.normalizedBoundingPoly = normalizedBoundingPoly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeOffset")
    public String timeOffset;
    public GoogleCloudDatalabelingV1beta1ObjectTrackingFrame withTimeOffset(String timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    }
}