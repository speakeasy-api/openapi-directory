package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateContactsResponse
 * If not successful, returns BatchUpdateContactsErrorDetails, a list of errors corresponding to each contact. The response to a request to update a batch of contacts.
**/
public class BatchUpdateContactsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateResult")
    public java.util.Map<String, PersonResponse> updateResult;
    public BatchUpdateContactsResponse withUpdateResult(java.util.Map<String, PersonResponse> updateResult) {
        this.updateResult = updateResult;
        return this;
    }
}