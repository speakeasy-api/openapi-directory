package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Pagination {
    @JsonProperty("current_page")
    public Integer currentPage;
    public Pagination withCurrentPage(Integer currentPage) {
        this.currentPage = currentPage;
        return this;
    }
    @JsonProperty("per_page")
    public Integer perPage;
    public Pagination withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonProperty("total_entries")
    public Integer totalEntries;
    public Pagination withTotalEntries(Integer totalEntries) {
        this.totalEntries = totalEntries;
        return this;
    }
    @JsonProperty("total_pages")
    public Integer totalPages;
    public Pagination withTotalPages(Integer totalPages) {
        this.totalPages = totalPages;
        return this;
    }
}