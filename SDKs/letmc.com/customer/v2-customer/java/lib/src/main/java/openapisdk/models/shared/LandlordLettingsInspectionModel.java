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
 * LandlordLettingsInspectionModel
 * Lettings Inspection
**/
public class LandlordLettingsInspectionModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("InspectionDate")
    public OffsetDateTime inspectionDate;
    public LandlordLettingsInspectionModel withInspectionDate(OffsetDateTime inspectionDate) {
        this.inspectionDate = inspectionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public LandlordLettingsInspectionModel withNotes(String notes) {
        this.notes = notes;
        return this;
    }
}