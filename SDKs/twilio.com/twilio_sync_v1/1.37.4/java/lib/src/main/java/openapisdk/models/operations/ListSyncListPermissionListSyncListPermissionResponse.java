package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncListPermissionListSyncListPermissionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncListPermissionListSyncListPermissionResponseMeta meta;
    public ListSyncListPermissionListSyncListPermissionResponse withMeta(ListSyncListPermissionListSyncListPermissionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public openapisdk.models.shared.SyncV1ServiceSyncListSyncListPermission[] permissions;
    public ListSyncListPermissionListSyncListPermissionResponse withPermissions(openapisdk.models.shared.SyncV1ServiceSyncListSyncListPermission[] permissions) {
        this.permissions = permissions;
        return this;
    }
}