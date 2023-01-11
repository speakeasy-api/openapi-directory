package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RoleGrant
 * This configuration defines all the Cloud IAM roles that needs to be granted to a particular GCP resource for the selected prinicpal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user.
**/
public class RoleGrant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("helperTextTemplate")
    public String helperTextTemplate;
    public RoleGrant withHelperTextTemplate(String helperTextTemplate) {
        this.helperTextTemplate = helperTextTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public RoleGrantPrincipalEnum principal;
    public RoleGrant withPrincipal(RoleGrantPrincipalEnum principal) {
        this.principal = principal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public Resource resource;
    public RoleGrant withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public String[] roles;
    public RoleGrant withRoles(String[] roles) {
        this.roles = roles;
        return this;
    }
}