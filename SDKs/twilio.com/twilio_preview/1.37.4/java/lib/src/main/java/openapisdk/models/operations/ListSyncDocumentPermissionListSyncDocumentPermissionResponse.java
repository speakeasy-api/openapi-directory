package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncDocumentPermissionListSyncDocumentPermissionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta meta;
    public ListSyncDocumentPermissionListSyncDocumentPermissionResponse withMeta(ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public openapisdk.models.shared.PreviewSyncServiceDocumentDocumentPermission[] permissions;
    public ListSyncDocumentPermissionListSyncDocumentPermissionResponse withPermissions(openapisdk.models.shared.PreviewSyncServiceDocumentDocumentPermission[] permissions) {
        this.permissions = permissions;
        return this;
    }
}