package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncDocumentUpdateSyncDocumentRequest {
    @SpeakeasyMetadata("form:name=Data")
    public Object data;
    public UpdateSyncDocumentUpdateSyncDocumentRequest withData(Object data) {
        this.data = data;
        return this;
    }
}