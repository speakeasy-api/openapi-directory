package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicytroubleshooterV1AccessTuple
 * Information about the principal, resource, and permission to check.
**/
public class GoogleCloudPolicytroubleshooterV1AccessTuple {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullResourceName")
    public String fullResourceName;
    public GoogleCloudPolicytroubleshooterV1AccessTuple withFullResourceName(String fullResourceName) {
        this.fullResourceName = fullResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public String permission;
    public GoogleCloudPolicytroubleshooterV1AccessTuple withPermission(String permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public GoogleCloudPolicytroubleshooterV1AccessTuple withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
}