package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PaginatedEmployeeResultMeta
 * Metadata associated with the response data
**/
public class PaginatedEmployeeResultMeta {
    @JsonProperty("offset")
    public Integer offset;
    public PaginatedEmployeeResultMeta withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonProperty("page_num")
    public Integer pageNum;
    public PaginatedEmployeeResultMeta withPageNum(Integer pageNum) {
        this.pageNum = pageNum;
        return this;
    }
    @JsonProperty("page_size")
    public Integer pageSize;
    public PaginatedEmployeeResultMeta withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonProperty("total_records")
    public Integer totalRecords;
    public PaginatedEmployeeResultMeta withTotalRecords(Integer totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}