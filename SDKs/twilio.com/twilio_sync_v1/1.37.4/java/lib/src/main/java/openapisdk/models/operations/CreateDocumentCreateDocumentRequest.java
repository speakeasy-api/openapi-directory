package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDocumentCreateDocumentRequest {
    @SpeakeasyMetadata("form:name=Data")
    public Object data;
    public CreateDocumentCreateDocumentRequest withData(Object data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public CreateDocumentCreateDocumentRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateDocumentCreateDocumentRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}