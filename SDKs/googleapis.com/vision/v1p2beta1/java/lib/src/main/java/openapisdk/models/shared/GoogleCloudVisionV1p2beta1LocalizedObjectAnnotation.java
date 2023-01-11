package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation
 * Set of detected objects with bounding boxes.
**/
public class GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingPoly")
    public GoogleCloudVisionV1p2beta1BoundingPoly boundingPoly;
    public GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation withBoundingPoly(GoogleCloudVisionV1p2beta1BoundingPoly boundingPoly) {
        this.boundingPoly = boundingPoly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mid")
    public String mid;
    public GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation withMid(String mid) {
        this.mid = mid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation withScore(Float score) {
        this.score = score;
        return this;
    }
}