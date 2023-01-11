package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCallsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public GetCallsResponseEmbedded embedded;
    public GetCallsResponse withEmbedded(GetCallsResponseEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public GetCallsResponseLinks links;
    public GetCallsResponse withLinks(GetCallsResponseLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GetCallsResponse withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public GetCallsResponse withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_index")
    public Long recordIndex;
    public GetCallsResponse withRecordIndex(Long recordIndex) {
        this.recordIndex = recordIndex;
        return this;
    }
}