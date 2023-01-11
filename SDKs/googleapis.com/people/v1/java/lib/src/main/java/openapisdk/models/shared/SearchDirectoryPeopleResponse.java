package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchDirectoryPeopleResponse
 * The response to a request for people in the authenticated user's domain directory that match the specified query.
**/
public class SearchDirectoryPeopleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchDirectoryPeopleResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("people")
    public Person[] people;
    public SearchDirectoryPeopleResponse withPeople(Person[] people) {
        this.people = people;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public SearchDirectoryPeopleResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}