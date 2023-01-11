package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPayeeListResponseIndividual {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public Name name;
    public GetPayeeListResponseIndividual withName(Name name) {
        this.name = name;
        return this;
    }
}