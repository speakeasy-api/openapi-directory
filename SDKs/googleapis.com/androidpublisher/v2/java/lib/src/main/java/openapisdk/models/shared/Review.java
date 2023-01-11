package openapisdk.models.shared;



public class Review {
    public String authorName;
    public Review withAuthorName(String authorName) {
        this.authorName = authorName;
        return this;
    }
    public Comment[] comments;
    public Review withComments(Comment[] comments) {
        this.comments = comments;
        return this;
    }
    public String reviewId;
    public Review withReviewId(String reviewId) {
        this.reviewId = reviewId;
        return this;
    }
}