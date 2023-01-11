package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StopLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gps")
    public V3StopGps gps;
    public V3StopLocation withGps(V3StopGps gps) {
        this.gps = gps;
        return this;
    }
}