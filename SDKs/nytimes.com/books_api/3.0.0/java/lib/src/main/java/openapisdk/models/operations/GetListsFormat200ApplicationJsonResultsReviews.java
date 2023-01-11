package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsFormat200ApplicationJsonResultsReviews {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("article_chapter_link")
    public String articleChapterLink;
    public GetListsFormat200ApplicationJsonResultsReviews withArticleChapterLink(String articleChapterLink) {
        this.articleChapterLink = articleChapterLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("book_review_link")
    public String bookReviewLink;
    public GetListsFormat200ApplicationJsonResultsReviews withBookReviewLink(String bookReviewLink) {
        this.bookReviewLink = bookReviewLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_chapter_link")
    public String firstChapterLink;
    public GetListsFormat200ApplicationJsonResultsReviews withFirstChapterLink(String firstChapterLink) {
        this.firstChapterLink = firstChapterLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sunday_review_link")
    public String sundayReviewLink;
    public GetListsFormat200ApplicationJsonResultsReviews withSundayReviewLink(String sundayReviewLink) {
        this.sundayReviewLink = sundayReviewLink;
        return this;
    }
}