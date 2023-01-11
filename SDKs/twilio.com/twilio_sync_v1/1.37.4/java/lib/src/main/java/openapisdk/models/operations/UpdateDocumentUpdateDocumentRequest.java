package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDocumentUpdateDocumentRequest {
    @SpeakeasyMetadata("form:name=Data")
    public Object data;
    public UpdateDocumentUpdateDocumentRequest withData(Object data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public UpdateDocumentUpdateDocumentRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}