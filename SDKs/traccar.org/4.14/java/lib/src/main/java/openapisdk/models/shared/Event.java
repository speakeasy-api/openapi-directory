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
    @JsonProperty("attributes")
    public java.util.Map<String, Object> attributes;
    public Event withAttributes(java.util.Map<String, Object> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public Long deviceId;
    public Event withDeviceId(Long deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("eventTime")
    public OffsetDateTime eventTime;
    public Event withEventTime(OffsetDateTime eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geofenceId")
    public Long geofenceId;
    public Event withGeofenceId(Long geofenceId) {
        this.geofenceId = geofenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Event withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenanceId")
    public Long maintenanceId;
    public Event withMaintenanceId(Long maintenanceId) {
        this.maintenanceId = maintenanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positionId")
    public Long positionId;
    public Event withPositionId(Long positionId) {
        this.positionId = positionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Event withType(String type) {
        this.type = type;
        return this;
    }
}