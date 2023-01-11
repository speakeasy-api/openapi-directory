package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AppointmentAuditViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointmentId")
    public String appointmentId;
    public AppointmentAuditViewModel withAppointmentId(String appointmentId) {
        this.appointmentId = appointmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AppointmentAuditViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modificationType")
    public String modificationType;
    public AppointmentAuditViewModel withModificationType(String modificationType) {
        this.modificationType = modificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiedBy")
    public String modifiedBy;
    public AppointmentAuditViewModel withModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modifiedOn")
    public OffsetDateTime modifiedOn;
    public AppointmentAuditViewModel withModifiedOn(OffsetDateTime modifiedOn) {
        this.modifiedOn = modifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notesAfter")
    public String notesAfter;
    public AppointmentAuditViewModel withNotesAfter(String notesAfter) {
        this.notesAfter = notesAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notesBefore")
    public String notesBefore;
    public AppointmentAuditViewModel withNotesBefore(String notesBefore) {
        this.notesBefore = notesBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusAfter")
    public String statusAfter;
    public AppointmentAuditViewModel withStatusAfter(String statusAfter) {
        this.statusAfter = statusAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusBefore")
    public String statusBefore;
    public AppointmentAuditViewModel withStatusBefore(String statusBefore) {
        this.statusBefore = statusBefore;
        return this;
    }
}