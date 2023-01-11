package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchCorridorOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corridorFromTo")
    public CorridorOut[] corridorFromTo;
    public BatchCorridorOut withCorridorFromTo(CorridorOut[] corridorFromTo) {
        this.corridorFromTo = corridorFromTo;
        return this;
    }
}