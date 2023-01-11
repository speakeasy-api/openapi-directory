package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StopGps {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Float latitude;
    public V3StopGps withLatitude(Float latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Float longitude;
    public V3StopGps withLongitude(Float longitude) {
        this.longitude = longitude;
        return this;
    }
}