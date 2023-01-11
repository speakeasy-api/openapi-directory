package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommitteeMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public CompactPerson person;
    public CommitteeMembership withPerson(CompactPerson person) {
        this.person = person;
        return this;
    }
    @JsonProperty("person_name")
    public String personName;
    public CommitteeMembership withPersonName(String personName) {
        this.personName = personName;
        return this;
    }
    @JsonProperty("role")
    public String role;
    public CommitteeMembership withRole(String role) {
        this.role = role;
        return this;
    }
}