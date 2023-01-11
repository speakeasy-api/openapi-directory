package openapisdk.models.shared;



public class ReviewsListResponse {
    public PageInfo pageInfo;
    public ReviewsListResponse withPageInfo(PageInfo pageInfo) {
        this.pageInfo = pageInfo;
        return this;
    }
    public Review[] reviews;
    public ReviewsListResponse withReviews(Review[] reviews) {
        this.reviews = reviews;
        return this;
    }
    public TokenPagination tokenPagination;
    public ReviewsListResponse withTokenPagination(TokenPagination tokenPagination) {
        this.tokenPagination = tokenPagination;
        return this;
    }
}