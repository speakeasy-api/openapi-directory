package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddHeldAccountsResponse
 * Response for batch create held accounts.
**/
public class AddHeldAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public AddHeldAccountResult[] responses;
    public AddHeldAccountsResponse withResponses(AddHeldAccountResult[] responses) {
        this.responses = responses;
        return this;
    }
}