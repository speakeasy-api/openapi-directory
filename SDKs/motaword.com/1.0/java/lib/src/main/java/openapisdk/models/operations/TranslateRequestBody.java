package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TranslateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public String[] contents;
    public TranslateRequestBody withContents(String[] contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public openapisdk.models.shared.FileAsData[] documents;
    public TranslateRequestBody withDocuments(openapisdk.models.shared.FileAsData[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public java.util.Map<String, Object> meta;
    public TranslateRequestBody withMeta(java.util.Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }
}