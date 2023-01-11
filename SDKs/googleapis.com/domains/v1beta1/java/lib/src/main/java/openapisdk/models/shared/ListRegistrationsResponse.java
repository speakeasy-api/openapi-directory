package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRegistrationsResponse
 * Response for the `ListRegistrations` method.
**/
public class ListRegistrationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListRegistrationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrations")
    public Registration[] registrations;
    public ListRegistrationsResponse withRegistrations(Registration[] registrations) {
        this.registrations = registrations;
        return this;
    }
}