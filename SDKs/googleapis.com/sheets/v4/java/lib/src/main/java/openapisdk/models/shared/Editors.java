package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Editors
 * The editors of a protected range.
**/
public class Editors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainUsersCanEdit")
    public Boolean domainUsersCanEdit;
    public Editors withDomainUsersCanEdit(Boolean domainUsersCanEdit) {
        this.domainUsersCanEdit = domainUsersCanEdit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public String[] groups;
    public Editors withGroups(String[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public String[] users;
    public Editors withUsers(String[] users) {
        this.users = users;
        return this;
    }
}