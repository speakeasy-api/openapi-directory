package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PageForResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfElements")
    public Integer numberOfElements;
    public PageForResponse withNumberOfElements(Integer numberOfElements) {
        this.numberOfElements = numberOfElements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Integer page;
    public PageForResponse withPage(Integer page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public PageForResponse withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalElements")
    public Long totalElements;
    public PageForResponse withTotalElements(Long totalElements) {
        this.totalElements = totalElements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPages")
    public Integer totalPages;
    public PageForResponse withTotalPages(Integer totalPages) {
        this.totalPages = totalPages;
        return this;
    }
}