package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PagingMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paging")
    public PagingMetaPaging paging;
    public PagingMeta withPaging(PagingMetaPaging paging) {
        this.paging = paging;
        return this;
    }
}