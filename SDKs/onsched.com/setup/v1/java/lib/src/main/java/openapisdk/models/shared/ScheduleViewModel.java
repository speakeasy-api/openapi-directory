package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ScheduleViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingsPerSlot")
    public Integer bookingsPerSlot;
    public ScheduleViewModel withBookingsPerSlot(Integer bookingsPerSlot) {
        this.bookingsPerSlot = bookingsPerSlot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedStatus")
    public Boolean deletedStatus;
    public ScheduleViewModel withDeletedStatus(Boolean deletedStatus) {
        this.deletedStatus = deletedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("deletedTime")
    public OffsetDateTime deletedTime;
    public ScheduleViewModel withDeletedTime(OffsetDateTime deletedTime) {
        this.deletedTime = deletedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ScheduleViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interval")
    public Integer interval;
    public ScheduleViewModel withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ScheduleViewModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ScheduleViewModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public ScheduleViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public ScheduleViewModel withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceGroupId")
    public String resourceGroupId;
    public ScheduleViewModel withResourceGroupId(String resourceGroupId) {
        this.resourceGroupId = resourceGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ScheduleViewModel withType(String type) {
        this.type = type;
        return this;
    }
}