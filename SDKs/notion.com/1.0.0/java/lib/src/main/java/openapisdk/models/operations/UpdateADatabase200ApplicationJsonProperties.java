package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabase200ApplicationJsonProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Author")
    public UpdateADatabase200ApplicationJsonPropertiesAuthor author;
    public UpdateADatabase200ApplicationJsonProperties withAuthor(UpdateADatabase200ApplicationJsonPropertiesAuthor author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Link")
    public UpdateADatabase200ApplicationJsonPropertiesLink link;
    public UpdateADatabase200ApplicationJsonProperties withLink(UpdateADatabase200ApplicationJsonPropertiesLink link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public UpdateADatabase200ApplicationJsonPropertiesName name;
    public UpdateADatabase200ApplicationJsonProperties withName(UpdateADatabase200ApplicationJsonPropertiesName name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Publisher")
    public UpdateADatabase200ApplicationJsonPropertiesPublisher publisher;
    public UpdateADatabase200ApplicationJsonProperties withPublisher(UpdateADatabase200ApplicationJsonPropertiesPublisher publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Publishing/Release Date")
    public UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate publishingReleaseDate;
    public UpdateADatabase200ApplicationJsonProperties withPublishingReleaseDate(UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate publishingReleaseDate) {
        this.publishingReleaseDate = publishingReleaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Read")
    public UpdateADatabase200ApplicationJsonPropertiesRead read;
    public UpdateADatabase200ApplicationJsonProperties withRead(UpdateADatabase200ApplicationJsonPropertiesRead read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score /5")
    public UpdateADatabase200ApplicationJsonPropertiesScore5 score5;
    public UpdateADatabase200ApplicationJsonProperties withScore5(UpdateADatabase200ApplicationJsonPropertiesScore5 score5) {
        this.score5 = score5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public UpdateADatabase200ApplicationJsonPropertiesStatus status;
    public UpdateADatabase200ApplicationJsonProperties withStatus(UpdateADatabase200ApplicationJsonPropertiesStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Summary")
    public UpdateADatabase200ApplicationJsonPropertiesSummary summary;
    public UpdateADatabase200ApplicationJsonProperties withSummary(UpdateADatabase200ApplicationJsonPropertiesSummary summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public UpdateADatabase200ApplicationJsonPropertiesType type;
    public UpdateADatabase200ApplicationJsonProperties withType(UpdateADatabase200ApplicationJsonPropertiesType type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Wine Pairing")
    public UpdateADatabase200ApplicationJsonPropertiesWinePairing winePairing;
    public UpdateADatabase200ApplicationJsonProperties withWinePairing(UpdateADatabase200ApplicationJsonPropertiesWinePairing winePairing) {
        this.winePairing = winePairing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public UpdateADatabase200ApplicationJsonPropertiesDate date;
    public UpdateADatabase200ApplicationJsonProperties withDate(UpdateADatabase200ApplicationJsonPropertiesDate date) {
        this.date = date;
        return this;
    }
}