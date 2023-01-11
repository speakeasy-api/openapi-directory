package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRoleListRoleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListRoleListRoleResponseMeta meta;
    public ListRoleListRoleResponse withMeta(ListRoleListRoleResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public openapisdk.models.shared.IpMessagingV2ServiceRole[] roles;
    public ListRoleListRoleResponse withRoles(openapisdk.models.shared.IpMessagingV2ServiceRole[] roles) {
        this.roles = roles;
        return this;
    }
}