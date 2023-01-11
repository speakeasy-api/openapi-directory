package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TripsTripDetails200ApplicationJsonResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public Double code;
    public TripsTripDetails200ApplicationJsonResult withCode(Double code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Track")
    public TripsTripDetails200ApplicationJsonResultTrack track;
    public TripsTripDetails200ApplicationJsonResult withTrack(TripsTripDetails200ApplicationJsonResultTrack track) {
        this.track = track;
        return this;
    }
}