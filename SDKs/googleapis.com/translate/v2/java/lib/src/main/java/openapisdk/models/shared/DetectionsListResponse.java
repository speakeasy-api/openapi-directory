package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectionsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detections")
    public DetectionsResource[][] detections;
    public DetectionsListResponse withDetections(DetectionsResource[][] detections) {
        this.detections = detections;
        return this;
    }
}