package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1LatLongRect
 * Rectangle determined by min and max `LatLng` pairs.
**/
public class GoogleCloudVisionV1p2beta1LatLongRect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLatLng")
    public LatLng maxLatLng;
    public GoogleCloudVisionV1p2beta1LatLongRect withMaxLatLng(LatLng maxLatLng) {
        this.maxLatLng = maxLatLng;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minLatLng")
    public LatLng minLatLng;
    public GoogleCloudVisionV1p2beta1LatLongRect withMinLatLng(LatLng minLatLng) {
        this.minLatLng = minLatLng;
        return this;
    }
}