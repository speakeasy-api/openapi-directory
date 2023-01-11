package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anyoneCanAddSelf")
    public Boolean anyoneCanAddSelf;
    public Event withAnyoneCanAddSelf(Boolean anyoneCanAddSelf) {
        this.anyoneCanAddSelf = anyoneCanAddSelf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public EventAttachment[] attachments;
    public Event withAttachments(EventAttachment[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendees")
    public EventAttendee[] attendees;
    public Event withAttendees(EventAttendee[] attendees) {
        this.attendees = attendees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendeesOmitted")
    public Boolean attendeesOmitted;
    public Event withAttendeesOmitted(Boolean attendeesOmitted) {
        this.attendeesOmitted = attendeesOmitted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorId")
    public String colorId;
    public Event withColorId(String colorId) {
        this.colorId = colorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conferenceData")
    public ConferenceData conferenceData;
    public Event withConferenceData(ConferenceData conferenceData) {
        this.conferenceData = conferenceData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Event withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public EventCreator creator;
    public Event withCreator(EventCreator creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Event withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public EventDateTime end;
    public Event withEnd(EventDateTime end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTimeUnspecified")
    public Boolean endTimeUnspecified;
    public Event withEndTimeUnspecified(Boolean endTimeUnspecified) {
        this.endTimeUnspecified = endTimeUnspecified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Event withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public Event withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendedProperties")
    public EventExtendedProperties extendedProperties;
    public Event withExtendedProperties(EventExtendedProperties extendedProperties) {
        this.extendedProperties = extendedProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gadget")
    public EventGadget gadget;
    public Event withGadget(EventGadget gadget) {
        this.gadget = gadget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestsCanInviteOthers")
    public Boolean guestsCanInviteOthers;
    public Event withGuestsCanInviteOthers(Boolean guestsCanInviteOthers) {
        this.guestsCanInviteOthers = guestsCanInviteOthers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestsCanModify")
    public Boolean guestsCanModify;
    public Event withGuestsCanModify(Boolean guestsCanModify) {
        this.guestsCanModify = guestsCanModify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestsCanSeeOtherGuests")
    public Boolean guestsCanSeeOtherGuests;
    public Event withGuestsCanSeeOtherGuests(Boolean guestsCanSeeOtherGuests) {
        this.guestsCanSeeOtherGuests = guestsCanSeeOtherGuests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hangoutLink")
    public String hangoutLink;
    public Event withHangoutLink(String hangoutLink) {
        this.hangoutLink = hangoutLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlLink")
    public String htmlLink;
    public Event withHtmlLink(String htmlLink) {
        this.htmlLink = htmlLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iCalUID")
    public String iCalUID;
    public Event withICalUid(String iCalUID) {
        this.iCalUID = iCalUID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Event withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Event withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public Event withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public Event withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizer")
    public EventOrganizer organizer;
    public Event withOrganizer(EventOrganizer organizer) {
        this.organizer = organizer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalStartTime")
    public EventDateTime originalStartTime;
    public Event withOriginalStartTime(EventDateTime originalStartTime) {
        this.originalStartTime = originalStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateCopy")
    public Boolean privateCopy;
    public Event withPrivateCopy(Boolean privateCopy) {
        this.privateCopy = privateCopy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurrence")
    public String[] recurrence;
    public Event withRecurrence(String[] recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringEventId")
    public String recurringEventId;
    public Event withRecurringEventId(String recurringEventId) {
        this.recurringEventId = recurringEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reminders")
    public EventReminders reminders;
    public Event withReminders(EventReminders reminders) {
        this.reminders = reminders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence")
    public Integer sequence;
    public Event withSequence(Integer sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public EventSource source;
    public Event withSource(EventSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public EventDateTime start;
    public Event withStart(EventDateTime start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Event withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public Event withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transparency")
    public String transparency;
    public Event withTransparency(String transparency) {
        this.transparency = transparency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public Event withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public String visibility;
    public Event withVisibility(String visibility) {
        this.visibility = visibility;
        return this;
    }
}