package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CampaignsResponsePagination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public CampaignsResponsePagination withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public CampaignsResponsePagination withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Long totalCount;
    public CampaignsResponsePagination withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}