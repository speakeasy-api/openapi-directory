package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetContactGroupsResponse
 * The response to a batch get contact groups request.
**/
public class BatchGetContactGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public ContactGroupResponse[] responses;
    public BatchGetContactGroupsResponse withResponses(ContactGroupResponse[] responses) {
        this.responses = responses;
        return this;
    }
}