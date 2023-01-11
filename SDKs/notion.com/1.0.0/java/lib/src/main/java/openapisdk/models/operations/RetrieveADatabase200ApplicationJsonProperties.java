package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveADatabase200ApplicationJsonProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Author")
    public RetrieveADatabase200ApplicationJsonPropertiesAuthor author;
    public RetrieveADatabase200ApplicationJsonProperties withAuthor(RetrieveADatabase200ApplicationJsonPropertiesAuthor author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Link")
    public RetrieveADatabase200ApplicationJsonPropertiesLink link;
    public RetrieveADatabase200ApplicationJsonProperties withLink(RetrieveADatabase200ApplicationJsonPropertiesLink link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public RetrieveADatabase200ApplicationJsonPropertiesName name;
    public RetrieveADatabase200ApplicationJsonProperties withName(RetrieveADatabase200ApplicationJsonPropertiesName name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Publisher")
    public RetrieveADatabase200ApplicationJsonPropertiesPublisher publisher;
    public RetrieveADatabase200ApplicationJsonProperties withPublisher(RetrieveADatabase200ApplicationJsonPropertiesPublisher publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Publishing/Release Date")
    public RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate publishingReleaseDate;
    public RetrieveADatabase200ApplicationJsonProperties withPublishingReleaseDate(RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate publishingReleaseDate) {
        this.publishingReleaseDate = publishingReleaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Read")
    public RetrieveADatabase200ApplicationJsonPropertiesRead read;
    public RetrieveADatabase200ApplicationJsonProperties withRead(RetrieveADatabase200ApplicationJsonPropertiesRead read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score /5")
    public RetrieveADatabase200ApplicationJsonPropertiesScore5 score5;
    public RetrieveADatabase200ApplicationJsonProperties withScore5(RetrieveADatabase200ApplicationJsonPropertiesScore5 score5) {
        this.score5 = score5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public RetrieveADatabase200ApplicationJsonPropertiesStatus status;
    public RetrieveADatabase200ApplicationJsonProperties withStatus(RetrieveADatabase200ApplicationJsonPropertiesStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Summary")
    public RetrieveADatabase200ApplicationJsonPropertiesSummary summary;
    public RetrieveADatabase200ApplicationJsonProperties withSummary(RetrieveADatabase200ApplicationJsonPropertiesSummary summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public RetrieveADatabase200ApplicationJsonPropertiesType type;
    public RetrieveADatabase200ApplicationJsonProperties withType(RetrieveADatabase200ApplicationJsonPropertiesType type) {
        this.type = type;
        return this;
    }
}