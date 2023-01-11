package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PersonList {
    @JsonProperty("pagination")
    public PaginationMeta pagination;
    public PersonList withPagination(PaginationMeta pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonProperty("results")
    public Person[] results;
    public PersonList withResults(Person[] results) {
        this.results = results;
        return this;
    }
}