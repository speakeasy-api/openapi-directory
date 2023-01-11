package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PaginatedAgentLocationResultMeta
 * Metadata associated with the response data
**/
public class PaginatedAgentLocationResultMeta {
    @JsonProperty("offset")
    public Integer offset;
    public PaginatedAgentLocationResultMeta withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonProperty("page_num")
    public Integer pageNum;
    public PaginatedAgentLocationResultMeta withPageNum(Integer pageNum) {
        this.pageNum = pageNum;
        return this;
    }
    @JsonProperty("page_size")
    public Integer pageSize;
    public PaginatedAgentLocationResultMeta withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonProperty("total_records")
    public Integer totalRecords;
    public PaginatedAgentLocationResultMeta withTotalRecords(Integer totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}