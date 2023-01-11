package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncSyncListPermissionListSyncSyncListPermissionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta meta;
    public ListSyncSyncListPermissionListSyncSyncListPermissionResponse withMeta(ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public openapisdk.models.shared.PreviewSyncServiceSyncListSyncListPermission[] permissions;
    public ListSyncSyncListPermissionListSyncSyncListPermissionResponse withPermissions(openapisdk.models.shared.PreviewSyncServiceSyncListSyncListPermission[] permissions) {
        this.permissions = permissions;
        return this;
    }
}