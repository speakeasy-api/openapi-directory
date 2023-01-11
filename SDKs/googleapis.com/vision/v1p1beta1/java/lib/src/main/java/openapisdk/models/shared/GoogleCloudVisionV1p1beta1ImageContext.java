package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1ImageContext
 * Image context and/or feature-specific parameters.
**/
public class GoogleCloudVisionV1p1beta1ImageContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cropHintsParams")
    public GoogleCloudVisionV1p1beta1CropHintsParams cropHintsParams;
    public GoogleCloudVisionV1p1beta1ImageContext withCropHintsParams(GoogleCloudVisionV1p1beta1CropHintsParams cropHintsParams) {
        this.cropHintsParams = cropHintsParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageHints")
    public String[] languageHints;
    public GoogleCloudVisionV1p1beta1ImageContext withLanguageHints(String[] languageHints) {
        this.languageHints = languageHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latLongRect")
    public GoogleCloudVisionV1p1beta1LatLongRect latLongRect;
    public GoogleCloudVisionV1p1beta1ImageContext withLatLongRect(GoogleCloudVisionV1p1beta1LatLongRect latLongRect) {
        this.latLongRect = latLongRect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productSearchParams")
    public GoogleCloudVisionV1p1beta1ProductSearchParams productSearchParams;
    public GoogleCloudVisionV1p1beta1ImageContext withProductSearchParams(GoogleCloudVisionV1p1beta1ProductSearchParams productSearchParams) {
        this.productSearchParams = productSearchParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textDetectionParams")
    public GoogleCloudVisionV1p1beta1TextDetectionParams textDetectionParams;
    public GoogleCloudVisionV1p1beta1ImageContext withTextDetectionParams(GoogleCloudVisionV1p1beta1TextDetectionParams textDetectionParams) {
        this.textDetectionParams = textDetectionParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webDetectionParams")
    public GoogleCloudVisionV1p1beta1WebDetectionParams webDetectionParams;
    public GoogleCloudVisionV1p1beta1ImageContext withWebDetectionParams(GoogleCloudVisionV1p1beta1WebDetectionParams webDetectionParams) {
        this.webDetectionParams = webDetectionParams;
        return this;
    }
}