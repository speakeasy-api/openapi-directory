package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchCreateContactsResponse
 * If not successful, returns BatchCreateContactsErrorDetails which contains a list of errors for each invalid contact. The response to a request to create a batch of contacts.
**/
public class BatchCreateContactsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdPeople")
    public PersonResponse[] createdPeople;
    public BatchCreateContactsResponse withCreatedPeople(PersonResponse[] createdPeople) {
        this.createdPeople = createdPeople;
        return this;
    }
}