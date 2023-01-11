package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ResourceOptionsInputModel
 * Options for the new resource
**/
public class ResourceOptionsInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bioLink")
    public String bioLink;
    public ResourceOptionsInputModel withBioLink(String bioLink) {
        this.bioLink = bioLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingNotification")
    public Integer bookingNotification;
    public ResourceOptionsInputModel withBookingNotification(Integer bookingNotification) {
        this.bookingNotification = bookingNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarAvailability")
    public Integer calendarAvailability;
    public ResourceOptionsInputModel withCalendarAvailability(Integer calendarAvailability) {
        this.calendarAvailability = calendarAvailability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayColor")
    public String displayColor;
    public ResourceOptionsInputModel withDisplayColor(String displayColor) {
        this.displayColor = displayColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("effectiveDate")
    public OffsetDateTime effectiveDate;
    public ResourceOptionsInputModel withEffectiveDate(OffsetDateTime effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public ResourceOptionsInputModel withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleCalendarId")
    public String googleCalendarId;
    public ResourceOptionsInputModel withGoogleCalendarId(String googleCalendarId) {
        this.googleCalendarId = googleCalendarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hourly")
    public Double hourly;
    public ResourceOptionsInputModel withHourly(Double hourly) {
        this.hourly = hourly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreBusinessHours")
    public Boolean ignoreBusinessHours;
    public ResourceOptionsInputModel withIgnoreBusinessHours(Boolean ignoreBusinessHours) {
        this.ignoreBusinessHours = ignoreBusinessHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationType")
    public Integer notificationType;
    public ResourceOptionsInputModel withNotificationType(Integer notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlookCalendarId")
    public String outlookCalendarId;
    public ResourceOptionsInputModel withOutlookCalendarId(String outlookCalendarId) {
        this.outlookCalendarId = outlookCalendarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortKey")
    public Integer sortKey;
    public ResourceOptionsInputModel withSortKey(Integer sortKey) {
        this.sortKey = sortKey;
        return this;
    }
}