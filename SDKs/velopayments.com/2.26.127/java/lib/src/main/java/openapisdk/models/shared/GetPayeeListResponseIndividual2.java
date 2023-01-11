package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPayeeListResponseIndividual2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public Name2 name;
    public GetPayeeListResponseIndividual2 withName(Name2 name) {
        this.name = name;
        return this;
    }
}