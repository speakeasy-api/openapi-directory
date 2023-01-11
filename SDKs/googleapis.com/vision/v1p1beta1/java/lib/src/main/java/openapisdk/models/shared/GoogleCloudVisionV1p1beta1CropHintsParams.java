package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1CropHintsParams
 * Parameters for crop hints annotation request.
**/
public class GoogleCloudVisionV1p1beta1CropHintsParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspectRatios")
    public Float[] aspectRatios;
    public GoogleCloudVisionV1p1beta1CropHintsParams withAspectRatios(Float[] aspectRatios) {
        this.aspectRatios = aspectRatios;
        return this;
    }
}