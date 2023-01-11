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
 * LandlordMaintenanceJobModel
 * Maintenance Job
**/
public class LandlordMaintenanceJobModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssignedTo")
    public String assignedTo;
    public LandlordMaintenanceJobModel withAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ClosedDate")
    public OffsetDateTime closedDate;
    public LandlordMaintenanceJobModel withClosedDate(OffsetDateTime closedDate) {
        this.closedDate = closedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public LandlordMaintenanceJobModel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaintenanceNotes")
    public LandlordMaintenanceJobNoteModel[] maintenanceNotes;
    public LandlordMaintenanceJobModel withMaintenanceNotes(LandlordMaintenanceJobNoteModel[] maintenanceNotes) {
        this.maintenanceNotes = maintenanceNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Property")
    public String property;
    public LandlordMaintenanceJobModel withProperty(String property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Reported")
    public OffsetDateTime reported;
    public LandlordMaintenanceJobModel withReported(OffsetDateTime reported) {
        this.reported = reported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public LandlordMaintenanceJobModel withStatus(String status) {
        this.status = status;
        return this;
    }
}