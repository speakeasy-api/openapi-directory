package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDirectoryPeopleResponse
 * The response to a request for the authenticated user's domain directory.
**/
public class ListDirectoryPeopleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDirectoryPeopleResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextSyncToken")
    public String nextSyncToken;
    public ListDirectoryPeopleResponse withNextSyncToken(String nextSyncToken) {
        this.nextSyncToken = nextSyncToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("people")
    public Person[] people;
    public ListDirectoryPeopleResponse withPeople(Person[] people) {
        this.people = people;
        return this;
    }
}