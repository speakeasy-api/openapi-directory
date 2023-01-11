package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncSyncMapCreateSyncSyncMapRequest {
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateSyncSyncMapCreateSyncSyncMapRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}