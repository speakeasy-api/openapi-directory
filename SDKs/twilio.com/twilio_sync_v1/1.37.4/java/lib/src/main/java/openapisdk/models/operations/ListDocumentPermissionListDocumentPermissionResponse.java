package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDocumentPermissionListDocumentPermissionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDocumentPermissionListDocumentPermissionResponseMeta meta;
    public ListDocumentPermissionListDocumentPermissionResponse withMeta(ListDocumentPermissionListDocumentPermissionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public openapisdk.models.shared.SyncV1ServiceDocumentDocumentPermission[] permissions;
    public ListDocumentPermissionListDocumentPermissionResponse withPermissions(openapisdk.models.shared.SyncV1ServiceDocumentDocumentPermission[] permissions) {
        this.permissions = permissions;
        return this;
    }
}