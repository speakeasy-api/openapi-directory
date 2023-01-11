package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmployeeResult {
    @JsonProperty("created")
    public Long created;
    public EmployeeResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonProperty("employment")
    public EmployeeResultEmployment employment;
    public EmployeeResult withEmployment(EmployeeResultEmployment employment) {
        this.employment = employment;
        return this;
    }
    @JsonProperty("group_id")
    public String groupId;
    public EmployeeResult withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public EmployeeResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public EmployeeResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("person")
    public EmployeeResultPerson person;
    public EmployeeResult withPerson(EmployeeResultPerson person) {
        this.person = person;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public EmployeeResult withVersion(String version) {
        this.version = version;
        return this;
    }
}