package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3OutletGeolocationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlets")
    public V3OutletGeolocation[] outlets;
    public V3OutletGeolocationResponse withOutlets(V3OutletGeolocation[] outlets) {
        this.outlets = outlets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3OutletGeolocationResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
}