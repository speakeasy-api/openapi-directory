package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Author")
    public RetrieveAPage200ApplicationJsonPropertiesAuthor author;
    public RetrieveAPage200ApplicationJsonProperties withAuthor(RetrieveAPage200ApplicationJsonPropertiesAuthor author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Link")
    public RetrieveAPage200ApplicationJsonPropertiesLink link;
    public RetrieveAPage200ApplicationJsonProperties withLink(RetrieveAPage200ApplicationJsonPropertiesLink link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public RetrieveAPage200ApplicationJsonPropertiesName name;
    public RetrieveAPage200ApplicationJsonProperties withName(RetrieveAPage200ApplicationJsonPropertiesName name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Publisher")
    public RetrieveAPage200ApplicationJsonPropertiesPublisher publisher;
    public RetrieveAPage200ApplicationJsonProperties withPublisher(RetrieveAPage200ApplicationJsonPropertiesPublisher publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Publishing/Release Date")
    public RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate publishingReleaseDate;
    public RetrieveAPage200ApplicationJsonProperties withPublishingReleaseDate(RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate publishingReleaseDate) {
        this.publishingReleaseDate = publishingReleaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Read")
    public RetrieveAPage200ApplicationJsonPropertiesRead read;
    public RetrieveAPage200ApplicationJsonProperties withRead(RetrieveAPage200ApplicationJsonPropertiesRead read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public RetrieveAPage200ApplicationJsonPropertiesStatus status;
    public RetrieveAPage200ApplicationJsonProperties withStatus(RetrieveAPage200ApplicationJsonPropertiesStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Summary")
    public RetrieveAPage200ApplicationJsonPropertiesSummary summary;
    public RetrieveAPage200ApplicationJsonProperties withSummary(RetrieveAPage200ApplicationJsonPropertiesSummary summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public RetrieveAPage200ApplicationJsonPropertiesType type;
    public RetrieveAPage200ApplicationJsonProperties withType(RetrieveAPage200ApplicationJsonPropertiesType type) {
        this.type = type;
        return this;
    }
}