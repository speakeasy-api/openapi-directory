package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAuthinfo200ApplicationJsonPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mutate")
    public Boolean mutate;
    public GetAuthinfo200ApplicationJsonPermissions withMutate(Boolean mutate) {
        this.mutate = mutate;
        return this;
    }
}