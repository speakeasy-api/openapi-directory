package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DependentResult {
    @JsonProperty("created")
    public Long created;
    public DependentResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonProperty("employee_id")
    public String employeeId;
    public DependentResult withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public DependentResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public DependentResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("person")
    public DependentResultPerson person;
    public DependentResult withPerson(DependentResultPerson person) {
        this.person = person;
        return this;
    }
    @JsonProperty("relationship")
    public DependentResultRelationshipEnum relationship;
    public DependentResult withRelationship(DependentResultRelationshipEnum relationship) {
        this.relationship = relationship;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public DependentResult withVersion(String version) {
        this.version = version;
        return this;
    }
}