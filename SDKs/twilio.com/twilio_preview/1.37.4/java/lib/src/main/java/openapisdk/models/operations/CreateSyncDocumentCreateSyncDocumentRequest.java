package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncDocumentCreateSyncDocumentRequest {
    @SpeakeasyMetadata("form:name=Data")
    public Object data;
    public CreateSyncDocumentCreateSyncDocumentRequest withData(Object data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateSyncDocumentCreateSyncDocumentRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}