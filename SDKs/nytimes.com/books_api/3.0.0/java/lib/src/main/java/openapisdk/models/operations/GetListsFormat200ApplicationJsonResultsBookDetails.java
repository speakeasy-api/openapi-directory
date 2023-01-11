package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsFormat200ApplicationJsonResultsBookDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("age_group")
    public String ageGroup;
    public GetListsFormat200ApplicationJsonResultsBookDetails withAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public GetListsFormat200ApplicationJsonResultsBookDetails withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor")
    public String contributor;
    public GetListsFormat200ApplicationJsonResultsBookDetails withContributor(String contributor) {
        this.contributor = contributor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_note")
    public String contributorNote;
    public GetListsFormat200ApplicationJsonResultsBookDetails withContributorNote(String contributorNote) {
        this.contributorNote = contributorNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetListsFormat200ApplicationJsonResultsBookDetails withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Long price;
    public GetListsFormat200ApplicationJsonResultsBookDetails withPrice(Long price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_isbn10")
    public String primaryIsbn10;
    public GetListsFormat200ApplicationJsonResultsBookDetails withPrimaryIsbn10(String primaryIsbn10) {
        this.primaryIsbn10 = primaryIsbn10;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_isbn13")
    public String primaryIsbn13;
    public GetListsFormat200ApplicationJsonResultsBookDetails withPrimaryIsbn13(String primaryIsbn13) {
        this.primaryIsbn13 = primaryIsbn13;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public GetListsFormat200ApplicationJsonResultsBookDetails withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetListsFormat200ApplicationJsonResultsBookDetails withTitle(String title) {
        this.title = title;
        return this;
    }
}