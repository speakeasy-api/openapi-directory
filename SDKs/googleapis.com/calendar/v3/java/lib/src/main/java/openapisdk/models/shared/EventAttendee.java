package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventAttendee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalGuests")
    public Integer additionalGuests;
    public EventAttendee withAdditionalGuests(Integer additionalGuests) {
        this.additionalGuests = additionalGuests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public EventAttendee withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public EventAttendee withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public EventAttendee withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EventAttendee withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optional")
    public Boolean optional;
    public EventAttendee withOptional(Boolean optional) {
        this.optional = optional;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizer")
    public Boolean organizer;
    public EventAttendee withOrganizer(Boolean organizer) {
        this.organizer = organizer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public Boolean resource;
    public EventAttendee withResource(Boolean resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public String responseStatus;
    public EventAttendee withResponseStatus(String responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Boolean self;
    public EventAttendee withSelf(Boolean self) {
        this.self = self;
        return this;
    }
}