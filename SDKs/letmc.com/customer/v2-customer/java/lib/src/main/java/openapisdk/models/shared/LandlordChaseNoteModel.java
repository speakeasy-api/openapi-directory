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
 * LandlordChaseNoteModel
 * Landlord Arrears Chase Note.
**/
public class LandlordChaseNoteModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Date")
    public OffsetDateTime date;
    public LandlordChaseNoteModel withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Note")
    public String note;
    public LandlordChaseNoteModel withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NoteType")
    public String noteType;
    public LandlordChaseNoteModel withNoteType(String noteType) {
        this.noteType = noteType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TenantID")
    public String tenantID;
    public LandlordChaseNoteModel withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}