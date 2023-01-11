package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DependentCreateRequest {
    @JsonProperty("person")
    public DependentCreateRequestPerson person;
    public DependentCreateRequest withPerson(DependentCreateRequestPerson person) {
        this.person = person;
        return this;
    }
    @JsonProperty("relationship")
    public DependentCreateRequestRelationshipEnum relationship;
    public DependentCreateRequest withRelationship(DependentCreateRequestRelationshipEnum relationship) {
        this.relationship = relationship;
        return this;
    }
}