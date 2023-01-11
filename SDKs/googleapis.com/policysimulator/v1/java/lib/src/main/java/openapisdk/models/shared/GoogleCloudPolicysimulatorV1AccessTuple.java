package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1AccessTuple
 * Information about the principal, resource, and permission to check.
**/
public class GoogleCloudPolicysimulatorV1AccessTuple {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullResourceName")
    public String fullResourceName;
    public GoogleCloudPolicysimulatorV1AccessTuple withFullResourceName(String fullResourceName) {
        this.fullResourceName = fullResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public String permission;
    public GoogleCloudPolicysimulatorV1AccessTuple withPermission(String permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public GoogleCloudPolicysimulatorV1AccessTuple withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
}