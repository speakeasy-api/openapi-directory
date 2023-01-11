package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PaginatedApplicationDocumentResultMeta
 * Metadata associated with the response data
**/
public class PaginatedApplicationDocumentResultMeta {
    @JsonProperty("offset")
    public Integer offset;
    public PaginatedApplicationDocumentResultMeta withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @JsonProperty("page_num")
    public Integer pageNum;
    public PaginatedApplicationDocumentResultMeta withPageNum(Integer pageNum) {
        this.pageNum = pageNum;
        return this;
    }
    @JsonProperty("page_size")
    public Integer pageSize;
    public PaginatedApplicationDocumentResultMeta withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonProperty("total_records")
    public Integer totalRecords;
    public PaginatedApplicationDocumentResultMeta withTotalRecords(Integer totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}