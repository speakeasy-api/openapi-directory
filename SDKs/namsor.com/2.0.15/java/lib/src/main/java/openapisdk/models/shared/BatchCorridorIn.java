package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchCorridorIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corridorFromTo")
    public CorridorIn[] corridorFromTo;
    public BatchCorridorIn withCorridorFromTo(CorridorIn[] corridorFromTo) {
        this.corridorFromTo = corridorFromTo;
        return this;
    }
}