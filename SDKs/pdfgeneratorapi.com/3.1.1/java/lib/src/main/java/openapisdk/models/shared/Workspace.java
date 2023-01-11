package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Workspace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public Workspace withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Workspace withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public String identifier;
    public Workspace withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_master_workspace")
    public Boolean isMasterWorkspace;
    public Workspace withIsMasterWorkspace(Boolean isMasterWorkspace) {
        this.isMasterWorkspace = isMasterWorkspace;
        return this;
    }
}