package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PermissionList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PagingMeta meta;
    public PermissionList withMeta(PagingMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String[] permissions;
    public PermissionList withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}