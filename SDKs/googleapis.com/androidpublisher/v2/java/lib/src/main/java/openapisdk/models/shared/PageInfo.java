package openapisdk.models.shared;



public class PageInfo {
    public Integer resultPerPage;
    public PageInfo withResultPerPage(Integer resultPerPage) {
        this.resultPerPage = resultPerPage;
        return this;
    }
    public Integer startIndex;
    public PageInfo withStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    public Integer totalResults;
    public PageInfo withTotalResults(Integer totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}