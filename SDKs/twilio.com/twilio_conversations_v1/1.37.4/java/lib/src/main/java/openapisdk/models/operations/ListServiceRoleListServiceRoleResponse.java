package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceRoleListServiceRoleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListServiceRoleListServiceRoleResponseMeta meta;
    public ListServiceRoleListServiceRoleResponse withMeta(ListServiceRoleListServiceRoleResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public openapisdk.models.shared.ConversationsV1ServiceServiceRole[] roles;
    public ListServiceRoleListServiceRoleResponse withRoles(openapisdk.models.shared.ConversationsV1ServiceServiceRole[] roles) {
        this.roles = roles;
        return this;
    }
}