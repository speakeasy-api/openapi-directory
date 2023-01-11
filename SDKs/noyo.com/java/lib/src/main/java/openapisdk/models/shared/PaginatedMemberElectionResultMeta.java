package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PaginatedMemberElectionResultMeta
 * Metadata associated with the response data
**/
public class PaginatedMemberElectionResultMeta {
    @JsonProperty("offset")
    public Integer offset;
    public PaginatedMemberElectionResultMeta withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonProperty("page_num")
    public Integer pageNum;
    public PaginatedMemberElectionResultMeta withPageNum(Integer pageNum) {
        this.pageNum = pageNum;
        return this;
    }
    @JsonProperty("page_size")
    public Integer pageSize;
    public PaginatedMemberElectionResultMeta withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonProperty("total_records")
    public Integer totalRecords;
    public PaginatedMemberElectionResultMeta withTotalRecords(Integer totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}