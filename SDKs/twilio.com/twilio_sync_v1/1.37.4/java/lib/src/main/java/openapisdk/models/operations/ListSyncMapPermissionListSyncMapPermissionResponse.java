package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncMapPermissionListSyncMapPermissionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncMapPermissionListSyncMapPermissionResponseMeta meta;
    public ListSyncMapPermissionListSyncMapPermissionResponse withMeta(ListSyncMapPermissionListSyncMapPermissionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapPermission[] permissions;
    public ListSyncMapPermissionListSyncMapPermissionResponse withPermissions(openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapPermission[] permissions) {
        this.permissions = permissions;
        return this;
    }
}