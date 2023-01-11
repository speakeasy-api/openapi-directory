package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TripsTripDetails200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Result")
    public TripsTripDetails200ApplicationJsonResult result;
    public TripsTripDetails200ApplicationJson withResult(TripsTripDetails200ApplicationJsonResult result) {
        this.result = result;
        return this;
    }
}