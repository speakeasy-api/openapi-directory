package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public Document[] documents;
    public DocumentList withDocuments(Document[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PagingMeta meta;
    public DocumentList withMeta(PagingMeta meta) {
        this.meta = meta;
        return this;
    }
}