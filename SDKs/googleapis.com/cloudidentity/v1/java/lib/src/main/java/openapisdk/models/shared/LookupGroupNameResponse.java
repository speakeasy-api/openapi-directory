package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LookupGroupNameResponse
 * The response message for GroupsService.LookupGroupName.
**/
public class LookupGroupNameResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LookupGroupNameResponse withName(String name) {
        this.name = name;
        return this;
    }
}