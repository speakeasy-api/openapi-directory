package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation
 * Prediction for what the object in the bounding box is.
**/
public class GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mid")
    public String mid;
    public GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation withMid(String mid) {
        this.mid = mid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation withScore(Float score) {
        this.score = score;
        return this;
    }
}