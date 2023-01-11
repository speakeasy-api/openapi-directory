package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta meta;
    public ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse withMeta(ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapPermission[] permissions;
    public ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse withPermissions(openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapPermission[] permissions) {
        this.permissions = permissions;
        return this;
    }
}