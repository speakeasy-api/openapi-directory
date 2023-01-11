package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPeopleResponse
 * The response to a get request for a list of people by resource name.
**/
public class GetPeopleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public PersonResponse[] responses;
    public GetPeopleResponse withResponses(PersonResponse[] responses) {
        this.responses = responses;
        return this;
    }
}