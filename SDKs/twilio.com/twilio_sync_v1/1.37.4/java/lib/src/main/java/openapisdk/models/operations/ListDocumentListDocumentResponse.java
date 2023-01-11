package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDocumentListDocumentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public openapisdk.models.shared.SyncV1ServiceDocument[] documents;
    public ListDocumentListDocumentResponse withDocuments(openapisdk.models.shared.SyncV1ServiceDocument[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDocumentListDocumentResponseMeta meta;
    public ListDocumentListDocumentResponse withMeta(ListDocumentListDocumentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}