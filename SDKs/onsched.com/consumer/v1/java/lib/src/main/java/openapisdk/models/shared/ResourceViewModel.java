package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ResourceViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bioLink")
    public String bioLink;
    public ResourceViewModel withBioLink(String bioLink) {
        this.bioLink = bioLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingNotification")
    public Integer bookingNotification;
    public ResourceViewModel withBookingNotification(Integer bookingNotification) {
        this.bookingNotification = bookingNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarAvailability")
    public Integer calendarAvailability;
    public ResourceViewModel withCalendarAvailability(Integer calendarAvailability) {
        this.calendarAvailability = calendarAvailability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedStatus")
    public Boolean deletedStatus;
    public ResourceViewModel withDeletedStatus(Boolean deletedStatus) {
        this.deletedStatus = deletedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("deletedTime")
    public OffsetDateTime deletedTime;
    public ResourceViewModel withDeletedTime(OffsetDateTime deletedTime) {
        this.deletedTime = deletedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ResourceViewModel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("effectiveDate")
    public OffsetDateTime effectiveDate;
    public ResourceViewModel withEffectiveDate(OffsetDateTime effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ResourceViewModel withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public ResourceViewModel withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleCalendarId")
    public String googleCalendarId;
    public ResourceViewModel withGoogleCalendarId(String googleCalendarId) {
        this.googleCalendarId = googleCalendarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupId")
    public String groupId;
    public ResourceViewModel withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hourly")
    public Double hourly;
    public ResourceViewModel withHourly(Double hourly) {
        this.hourly = hourly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ResourceViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreBusinessHours")
    public Boolean ignoreBusinessHours;
    public ResourceViewModel withIgnoreBusinessHours(Boolean ignoreBusinessHours) {
        this.ignoreBusinessHours = ignoreBusinessHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public ResourceViewModel withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ResourceViewModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ResourceViewModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationType")
    public Integer notificationType;
    public ResourceViewModel withNotificationType(Integer notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public ResourceViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlookCalendarId")
    public String outlookCalendarId;
    public ResourceViewModel withOutlookCalendarId(String outlookCalendarId) {
        this.outlookCalendarId = outlookCalendarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skypeName")
    public String skypeName;
    public ResourceViewModel withSkypeName(String skypeName) {
        this.skypeName = skypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortKey")
    public Integer sortKey;
    public ResourceViewModel withSortKey(Integer sortKey) {
        this.sortKey = sortKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneIana")
    public String timezoneIana;
    public ResourceViewModel withTimezoneIana(String timezoneIana) {
        this.timezoneIana = timezoneIana;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneId")
    public String timezoneId;
    public ResourceViewModel withTimezoneId(String timezoneId) {
        this.timezoneId = timezoneId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneOffset")
    public Integer timezoneOffset;
    public ResourceViewModel withTimezoneOffset(Integer timezoneOffset) {
        this.timezoneOffset = timezoneOffset;
        return this;
    }
}