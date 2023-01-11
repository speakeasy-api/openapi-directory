package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaginationData
 * Page containing results.
**/
public class PaginationData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public Long number;
    public PaginationData withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public PaginationData withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalElements")
    public Long totalElements;
    public PaginationData withTotalElements(Long totalElements) {
        this.totalElements = totalElements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPages")
    public Long totalPages;
    public PaginationData withTotalPages(Long totalPages) {
        this.totalPages = totalPages;
        return this;
    }
}