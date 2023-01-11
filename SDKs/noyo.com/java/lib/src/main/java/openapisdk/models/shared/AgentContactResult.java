package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AgentContactResult {
    @JsonProperty("agent_id")
    public String agentId;
    public AgentContactResult withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @JsonProperty("created")
    public Long created;
    public AgentContactResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public AgentContactResult withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public AgentContactResult withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AgentContactResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public AgentContactResult withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public AgentContactResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public AgentContactResult withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public AgentContactResult withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("types")
    public AgentContactResultTypesEnum[] types;
    public AgentContactResult withTypes(AgentContactResultTypesEnum[] types) {
        this.types = types;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public AgentContactResult withVersion(String version) {
        this.version = version;
        return this;
    }
}