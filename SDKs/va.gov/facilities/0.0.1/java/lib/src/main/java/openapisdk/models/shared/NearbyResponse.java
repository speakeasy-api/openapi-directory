package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NearbyResponse {
    @JsonProperty("data")
    public Nearby[] data;
    public NearbyResponse withData(Nearby[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public NearbyResponse withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
}