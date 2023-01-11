package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PaginatedCoveragePlanResultMeta
 * Metadata associated with the response data
**/
public class PaginatedCoveragePlanResultMeta {
    @JsonProperty("offset")
    public Integer offset;
    public PaginatedCoveragePlanResultMeta withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonProperty("page_num")
    public Integer pageNum;
    public PaginatedCoveragePlanResultMeta withPageNum(Integer pageNum) {
        this.pageNum = pageNum;
        return this;
    }
    @JsonProperty("page_size")
    public Integer pageSize;
    public PaginatedCoveragePlanResultMeta withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonProperty("total_records")
    public Integer totalRecords;
    public PaginatedCoveragePlanResultMeta withTotalRecords(Integer totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}