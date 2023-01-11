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
 * LandlordMaintenanceJobNoteModel
 * Maintenance Job Note Helper Model:-
**/
public class LandlordMaintenanceJobNoteModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public LandlordMaintenanceJobNoteModel withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NoteContents")
    public String noteContents;
    public LandlordMaintenanceJobNoteModel withNoteContents(String noteContents) {
        this.noteContents = noteContents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OID")
    public String oid;
    public LandlordMaintenanceJobNoteModel withOid(String oid) {
        this.oid = oid;
        return this;
    }
}