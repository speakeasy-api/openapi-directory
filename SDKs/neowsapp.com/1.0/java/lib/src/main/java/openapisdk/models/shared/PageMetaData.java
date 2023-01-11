package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PageMetaData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public Long number;
    public PageMetaData withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public PageMetaData withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_elements")
    public Long totalElements;
    public PageMetaData withTotalElements(Long totalElements) {
        this.totalElements = totalElements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_pages")
    public Long totalPages;
    public PageMetaData withTotalPages(Long totalPages) {
        this.totalPages = totalPages;
        return this;
    }
}