package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1LocationInfo
 * Detected entity location information.
**/
public class GoogleCloudVisionV1p2beta1LocationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latLng")
    public LatLng latLng;
    public GoogleCloudVisionV1p2beta1LocationInfo withLatLng(LatLng latLng) {
        this.latLng = latLng;
        return this;
    }
}