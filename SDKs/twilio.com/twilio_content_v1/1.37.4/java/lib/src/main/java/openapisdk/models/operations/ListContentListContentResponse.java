package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListContentListContentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public openapisdk.models.shared.ContentV1Content[] contents;
    public ListContentListContentResponse withContents(openapisdk.models.shared.ContentV1Content[] contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListContentListContentResponseMeta meta;
    public ListContentListContentResponse withMeta(ListContentListContentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}