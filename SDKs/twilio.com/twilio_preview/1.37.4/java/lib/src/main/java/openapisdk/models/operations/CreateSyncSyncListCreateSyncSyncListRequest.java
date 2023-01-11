package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncSyncListCreateSyncSyncListRequest {
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateSyncSyncListCreateSyncSyncListRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}