/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsCreateRequestBody {
    /**
     * The description of the team.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public TeamsCreateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * The [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. LDAP synchronization must be enabled to map LDAP entries to a team. Use the "[Update LDAP mapping for a team](https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team)" endpoint to change the LDAP DN. For more information, see "[Using LDAP](https://docs.github.com/enterprise-server@3.2/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-ldap#enabling-ldap-sync)."
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_dn")
    public String ldapDn;

    public TeamsCreateRequestBody withLdapDn(String ldapDn) {
        this.ldapDn = ldapDn;
        return this;
    }
    
    /**
     * List GitHub IDs for organization members who will become team maintainers.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintainers")
    public String[] maintainers;

    public TeamsCreateRequestBody withMaintainers(String[] maintainers) {
        this.maintainers = maintainers;
        return this;
    }
    
    /**
     * The name of the team.
     */
    @JsonProperty("name")
    public String name;

    public TeamsCreateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The ID of a team to set as the parent team.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_team_id")
    public Long parentTeamId;

    public TeamsCreateRequestBody withParentTeamId(Long parentTeamId) {
        this.parentTeamId = parentTeamId;
        return this;
    }
    
    /**
     * **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public TeamsCreateRequestBodyPermissionEnum permission;

    public TeamsCreateRequestBody withPermission(TeamsCreateRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    
    /**
     * The level of privacy this team should have. The options are:  
     * **For a non-nested team:**  
     * \* `secret` - only visible to organization owners and members of this team.  
     * \* `closed` - visible to all members of this organization.  
     * Default: `secret`  
     * **For a parent or child team:**  
     * \* `closed` - visible to all members of this organization.  
     * Default for child team: `closed`
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public TeamsCreateRequestBodyPrivacyEnum privacy;

    public TeamsCreateRequestBody withPrivacy(TeamsCreateRequestBodyPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    
    /**
     * The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repo_names")
    public String[] repoNames;

    public TeamsCreateRequestBody withRepoNames(String[] repoNames) {
        this.repoNames = repoNames;
        return this;
    }
    
    public TeamsCreateRequestBody(@JsonProperty("name") String name) {
        this.name = name;
  }
}
