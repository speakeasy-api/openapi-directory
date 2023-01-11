package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Calendar {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conferenceProperties")
    public ConferenceProperties conferenceProperties;
    public Calendar withConferenceProperties(ConferenceProperties conferenceProperties) {
        this.conferenceProperties = conferenceProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Calendar withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Calendar withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Calendar withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Calendar withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public Calendar withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public Calendar withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public Calendar withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}