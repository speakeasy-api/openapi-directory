package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrgMembershipPermissions {
    @JsonProperty("can_create_repository")
    public Boolean canCreateRepository;
    public OrgMembershipPermissions withCanCreateRepository(Boolean canCreateRepository) {
        this.canCreateRepository = canCreateRepository;
        return this;
    }
}