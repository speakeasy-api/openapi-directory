package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3OutletResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlets")
    public V3Outlet[] outlets;
    public V3OutletResponse withOutlets(V3Outlet[] outlets) {
        this.outlets = outlets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3OutletResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
}