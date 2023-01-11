package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientProfileNps
 * net promoter score info for this client
**/
public class ClientProfileNps {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("average")
    public ClientProfileNpsAverage average;
    public ClientProfileNps withAverage(ClientProfileNpsAverage average) {
        this.average = average;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public ClientProfileNpsLast last;
    public ClientProfileNps withLast(ClientProfileNpsLast last) {
        this.last = last;
        return this;
    }
}