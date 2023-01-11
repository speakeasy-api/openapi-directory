package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResult
 * A result of a search query.
**/
public class SearchResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public Person person;
    public SearchResult withPerson(Person person) {
        this.person = person;
        return this;
    }
}