package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResultsProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Author")
    public QueryADatabase200ApplicationJsonResultsPropertiesAuthor author;
    public QueryADatabase200ApplicationJsonResultsProperties withAuthor(QueryADatabase200ApplicationJsonResultsPropertiesAuthor author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Link")
    public QueryADatabase200ApplicationJsonResultsPropertiesLink link;
    public QueryADatabase200ApplicationJsonResultsProperties withLink(QueryADatabase200ApplicationJsonResultsPropertiesLink link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public QueryADatabase200ApplicationJsonResultsPropertiesName name;
    public QueryADatabase200ApplicationJsonResultsProperties withName(QueryADatabase200ApplicationJsonResultsPropertiesName name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Publisher")
    public QueryADatabase200ApplicationJsonResultsPropertiesPublisher publisher;
    public QueryADatabase200ApplicationJsonResultsProperties withPublisher(QueryADatabase200ApplicationJsonResultsPropertiesPublisher publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Publishing/Release Date")
    public QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate publishingReleaseDate;
    public QueryADatabase200ApplicationJsonResultsProperties withPublishingReleaseDate(QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate publishingReleaseDate) {
        this.publishingReleaseDate = publishingReleaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Read")
    public QueryADatabase200ApplicationJsonResultsPropertiesRead read;
    public QueryADatabase200ApplicationJsonResultsProperties withRead(QueryADatabase200ApplicationJsonResultsPropertiesRead read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score /5")
    public QueryADatabase200ApplicationJsonResultsPropertiesScore5 score5;
    public QueryADatabase200ApplicationJsonResultsProperties withScore5(QueryADatabase200ApplicationJsonResultsPropertiesScore5 score5) {
        this.score5 = score5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public QueryADatabase200ApplicationJsonResultsPropertiesStatus status;
    public QueryADatabase200ApplicationJsonResultsProperties withStatus(QueryADatabase200ApplicationJsonResultsPropertiesStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Summary")
    public QueryADatabase200ApplicationJsonResultsPropertiesSummary summary;
    public QueryADatabase200ApplicationJsonResultsProperties withSummary(QueryADatabase200ApplicationJsonResultsPropertiesSummary summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public QueryADatabase200ApplicationJsonResultsPropertiesType type;
    public QueryADatabase200ApplicationJsonResultsProperties withType(QueryADatabase200ApplicationJsonResultsPropertiesType type) {
        this.type = type;
        return this;
    }
}