package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Author")
    public UpdatePageProperties200ApplicationJsonPropertiesAuthor author;
    public UpdatePageProperties200ApplicationJsonProperties withAuthor(UpdatePageProperties200ApplicationJsonPropertiesAuthor author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Link")
    public UpdatePageProperties200ApplicationJsonPropertiesLink link;
    public UpdatePageProperties200ApplicationJsonProperties withLink(UpdatePageProperties200ApplicationJsonPropertiesLink link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public UpdatePageProperties200ApplicationJsonPropertiesName name;
    public UpdatePageProperties200ApplicationJsonProperties withName(UpdatePageProperties200ApplicationJsonPropertiesName name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Publisher")
    public UpdatePageProperties200ApplicationJsonPropertiesPublisher publisher;
    public UpdatePageProperties200ApplicationJsonProperties withPublisher(UpdatePageProperties200ApplicationJsonPropertiesPublisher publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Publishing/Release Date")
    public UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate publishingReleaseDate;
    public UpdatePageProperties200ApplicationJsonProperties withPublishingReleaseDate(UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate publishingReleaseDate) {
        this.publishingReleaseDate = publishingReleaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Read")
    public UpdatePageProperties200ApplicationJsonPropertiesRead read;
    public UpdatePageProperties200ApplicationJsonProperties withRead(UpdatePageProperties200ApplicationJsonPropertiesRead read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score /5")
    public UpdatePageProperties200ApplicationJsonPropertiesScore5 score5;
    public UpdatePageProperties200ApplicationJsonProperties withScore5(UpdatePageProperties200ApplicationJsonPropertiesScore5 score5) {
        this.score5 = score5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public UpdatePageProperties200ApplicationJsonPropertiesStatus status;
    public UpdatePageProperties200ApplicationJsonProperties withStatus(UpdatePageProperties200ApplicationJsonPropertiesStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Summary")
    public UpdatePageProperties200ApplicationJsonPropertiesSummary summary;
    public UpdatePageProperties200ApplicationJsonProperties withSummary(UpdatePageProperties200ApplicationJsonPropertiesSummary summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public UpdatePageProperties200ApplicationJsonPropertiesType type;
    public UpdatePageProperties200ApplicationJsonProperties withType(UpdatePageProperties200ApplicationJsonPropertiesType type) {
        this.type = type;
        return this;
    }
}