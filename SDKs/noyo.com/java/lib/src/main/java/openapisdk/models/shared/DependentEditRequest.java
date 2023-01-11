package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DependentEditRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public DependentEditRequestPerson person;
    public DependentEditRequest withPerson(DependentEditRequestPerson person) {
        this.person = person;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationship")
    public DependentEditRequestRelationshipEnum relationship;
    public DependentEditRequest withRelationship(DependentEditRequestRelationshipEnum relationship) {
        this.relationship = relationship;
        return this;
    }
}