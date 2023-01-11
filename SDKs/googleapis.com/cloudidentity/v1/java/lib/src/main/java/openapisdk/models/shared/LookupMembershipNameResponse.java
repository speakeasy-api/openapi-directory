package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LookupMembershipNameResponse
 * The response message for MembershipsService.LookupMembershipName.
**/
public class LookupMembershipNameResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LookupMembershipNameResponse withName(String name) {
        this.name = name;
        return this;
    }
}