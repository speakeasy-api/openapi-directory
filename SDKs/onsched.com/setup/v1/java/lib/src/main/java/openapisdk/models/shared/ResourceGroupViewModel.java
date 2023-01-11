package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ResourceGroupViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingNotification")
    public Integer bookingNotification;
    public ResourceGroupViewModel withBookingNotification(Integer bookingNotification) {
        this.bookingNotification = bookingNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedStatus")
    public Boolean deletedStatus;
    public ResourceGroupViewModel withDeletedStatus(Boolean deletedStatus) {
        this.deletedStatus = deletedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("deletedTime")
    public OffsetDateTime deletedTime;
    public ResourceGroupViewModel withDeletedTime(OffsetDateTime deletedTime) {
        this.deletedTime = deletedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ResourceGroupViewModel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ResourceGroupViewModel withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ResourceGroupViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ResourceGroupViewModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ResourceGroupViewModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public ResourceGroupViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
}