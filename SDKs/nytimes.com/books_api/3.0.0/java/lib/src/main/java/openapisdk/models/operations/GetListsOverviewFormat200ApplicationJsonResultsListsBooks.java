package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsOverviewFormat200ApplicationJsonResultsListsBooks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("age_group")
    public String ageGroup;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor")
    public String contributor;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withContributor(String contributor) {
        this.contributor = contributor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_note")
    public String contributorNote;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withContributorNote(String contributorNote) {
        this.contributorNote = contributorNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Long price;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withPrice(Long price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_isbn10")
    public String primaryIsbn10;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withPrimaryIsbn10(String primaryIsbn10) {
        this.primaryIsbn10 = primaryIsbn10;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_isbn13")
    public String primaryIsbn13;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withPrimaryIsbn13(String primaryIsbn13) {
        this.primaryIsbn13 = primaryIsbn13;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withRank(Long rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_date")
    public String updatedDate;
    public GetListsOverviewFormat200ApplicationJsonResultsListsBooks withUpdatedDate(String updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}