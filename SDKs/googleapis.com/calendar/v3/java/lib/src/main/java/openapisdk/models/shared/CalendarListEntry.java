package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalendarListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessRole")
    public String accessRole;
    public CalendarListEntry withAccessRole(String accessRole) {
        this.accessRole = accessRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColor")
    public String backgroundColor;
    public CalendarListEntry withBackgroundColor(String backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorId")
    public String colorId;
    public CalendarListEntry withColorId(String colorId) {
        this.colorId = colorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conferenceProperties")
    public ConferenceProperties conferenceProperties;
    public CalendarListEntry withConferenceProperties(ConferenceProperties conferenceProperties) {
        this.conferenceProperties = conferenceProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultReminders")
    public EventReminder[] defaultReminders;
    public CalendarListEntry withDefaultReminders(EventReminder[] defaultReminders) {
        this.defaultReminders = defaultReminders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public CalendarListEntry withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CalendarListEntry withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public CalendarListEntry withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foregroundColor")
    public String foregroundColor;
    public CalendarListEntry withForegroundColor(String foregroundColor) {
        this.foregroundColor = foregroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden")
    public Boolean hidden;
    public CalendarListEntry withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CalendarListEntry withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CalendarListEntry withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public CalendarListEntry withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationSettings")
    public CalendarListEntryNotificationSettings notificationSettings;
    public CalendarListEntry withNotificationSettings(CalendarListEntryNotificationSettings notificationSettings) {
        this.notificationSettings = notificationSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public CalendarListEntry withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selected")
    public Boolean selected;
    public CalendarListEntry withSelected(Boolean selected) {
        this.selected = selected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public CalendarListEntry withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summaryOverride")
    public String summaryOverride;
    public CalendarListEntry withSummaryOverride(String summaryOverride) {
        this.summaryOverride = summaryOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public CalendarListEntry withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}