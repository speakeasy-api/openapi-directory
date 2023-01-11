package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsDateListJson200ApplicationJsonResultsBooks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("age_group")
    public String ageGroup;
    public GetListsDateListJson200ApplicationJsonResultsBooks withAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amazon_product_url")
    public String amazonProductUrl;
    public GetListsDateListJson200ApplicationJsonResultsBooks withAmazonProductUrl(String amazonProductUrl) {
        this.amazonProductUrl = amazonProductUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("article_chapter_link")
    public String articleChapterLink;
    public GetListsDateListJson200ApplicationJsonResultsBooks withArticleChapterLink(String articleChapterLink) {
        this.articleChapterLink = articleChapterLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asterisk")
    public Long asterisk;
    public GetListsDateListJson200ApplicationJsonResultsBooks withAsterisk(Long asterisk) {
        this.asterisk = asterisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public GetListsDateListJson200ApplicationJsonResultsBooks withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("book_image")
    public String bookImage;
    public GetListsDateListJson200ApplicationJsonResultsBooks withBookImage(String bookImage) {
        this.bookImage = bookImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("book_review_link")
    public String bookReviewLink;
    public GetListsDateListJson200ApplicationJsonResultsBooks withBookReviewLink(String bookReviewLink) {
        this.bookReviewLink = bookReviewLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor")
    public String contributor;
    public GetListsDateListJson200ApplicationJsonResultsBooks withContributor(String contributor) {
        this.contributor = contributor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_note")
    public String contributorNote;
    public GetListsDateListJson200ApplicationJsonResultsBooks withContributorNote(String contributorNote) {
        this.contributorNote = contributorNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dagger")
    public Long dagger;
    public GetListsDateListJson200ApplicationJsonResultsBooks withDagger(Long dagger) {
        this.dagger = dagger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetListsDateListJson200ApplicationJsonResultsBooks withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_chapter_link")
    public String firstChapterLink;
    public GetListsDateListJson200ApplicationJsonResultsBooks withFirstChapterLink(String firstChapterLink) {
        this.firstChapterLink = firstChapterLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isbns")
    public GetListsDateListJson200ApplicationJsonResultsBooksIsbns[] isbns;
    public GetListsDateListJson200ApplicationJsonResultsBooks withIsbns(GetListsDateListJson200ApplicationJsonResultsBooksIsbns[] isbns) {
        this.isbns = isbns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Long price;
    public GetListsDateListJson200ApplicationJsonResultsBooks withPrice(Long price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_isbn10")
    public String primaryIsbn10;
    public GetListsDateListJson200ApplicationJsonResultsBooks withPrimaryIsbn10(String primaryIsbn10) {
        this.primaryIsbn10 = primaryIsbn10;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_isbn13")
    public String primaryIsbn13;
    public GetListsDateListJson200ApplicationJsonResultsBooks withPrimaryIsbn13(String primaryIsbn13) {
        this.primaryIsbn13 = primaryIsbn13;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public GetListsDateListJson200ApplicationJsonResultsBooks withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public GetListsDateListJson200ApplicationJsonResultsBooks withRank(Long rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank_last_week")
    public Long rankLastWeek;
    public GetListsDateListJson200ApplicationJsonResultsBooks withRankLastWeek(Long rankLastWeek) {
        this.rankLastWeek = rankLastWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sunday_review_link")
    public String sundayReviewLink;
    public GetListsDateListJson200ApplicationJsonResultsBooks withSundayReviewLink(String sundayReviewLink) {
        this.sundayReviewLink = sundayReviewLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetListsDateListJson200ApplicationJsonResultsBooks withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeks_on_list")
    public Long weeksOnList;
    public GetListsDateListJson200ApplicationJsonResultsBooks withWeeksOnList(Long weeksOnList) {
        this.weeksOnList = weeksOnList;
        return this;
    }
}