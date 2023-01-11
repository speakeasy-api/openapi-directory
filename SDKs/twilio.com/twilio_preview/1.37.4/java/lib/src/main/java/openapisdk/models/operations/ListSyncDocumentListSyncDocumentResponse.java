package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSyncDocumentListSyncDocumentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public openapisdk.models.shared.PreviewSyncServiceDocument[] documents;
    public ListSyncDocumentListSyncDocumentResponse withDocuments(openapisdk.models.shared.PreviewSyncServiceDocument[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSyncDocumentListSyncDocumentResponseMeta meta;
    public ListSyncDocumentListSyncDocumentResponse withMeta(ListSyncDocumentListSyncDocumentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}