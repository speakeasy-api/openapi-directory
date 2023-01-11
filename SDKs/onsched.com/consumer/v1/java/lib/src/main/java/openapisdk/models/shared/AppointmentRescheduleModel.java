package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AppointmentRescheduleModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endDateTime")
    public OffsetDateTime endDateTime;
    public AppointmentRescheduleModel withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public String resourceId;
    public AppointmentRescheduleModel withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceId")
    public String serviceId;
    public AppointmentRescheduleModel withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startDateTime")
    public OffsetDateTime startDateTime;
    public AppointmentRescheduleModel withStartDateTime(OffsetDateTime startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travelAppointmentId")
    public String travelAppointmentId;
    public AppointmentRescheduleModel withTravelAppointmentId(String travelAppointmentId) {
        this.travelAppointmentId = travelAppointmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travelTimeMins")
    public Integer travelTimeMins;
    public AppointmentRescheduleModel withTravelTimeMins(Integer travelTimeMins) {
        this.travelTimeMins = travelTimeMins;
        return this;
    }
}