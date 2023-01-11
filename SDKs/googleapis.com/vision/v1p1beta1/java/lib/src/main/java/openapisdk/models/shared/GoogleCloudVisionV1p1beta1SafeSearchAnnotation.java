package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1SafeSearchAnnotation
 * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
**/
public class GoogleCloudVisionV1p1beta1SafeSearchAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adult")
    public GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum adult;
    public GoogleCloudVisionV1p1beta1SafeSearchAnnotation withAdult(GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum adult) {
        this.adult = adult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medical")
    public GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum medical;
    public GoogleCloudVisionV1p1beta1SafeSearchAnnotation withMedical(GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum medical) {
        this.medical = medical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("racy")
    public GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum racy;
    public GoogleCloudVisionV1p1beta1SafeSearchAnnotation withRacy(GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum racy) {
        this.racy = racy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spoof")
    public GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum spoof;
    public GoogleCloudVisionV1p1beta1SafeSearchAnnotation withSpoof(GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum spoof) {
        this.spoof = spoof;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violence")
    public GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum violence;
    public GoogleCloudVisionV1p1beta1SafeSearchAnnotation withViolence(GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum violence) {
        this.violence = violence;
        return this;
    }
}