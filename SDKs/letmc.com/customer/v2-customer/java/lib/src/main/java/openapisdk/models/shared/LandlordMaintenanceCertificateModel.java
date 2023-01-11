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
 * LandlordMaintenanceCertificateModel
 * Maintenance Certificate
**/
public class LandlordMaintenanceCertificateModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Due")
    public OffsetDateTime due;
    public LandlordMaintenanceCertificateModel withDue(OffsetDateTime due) {
        this.due = due;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Files")
    public LettingsLandlordDocument[] files;
    public LandlordMaintenanceCertificateModel withFiles(LettingsLandlordDocument[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public LandlordMaintenanceCertificateModel withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public LandlordMaintenanceCertificateModel withType(String type) {
        this.type = type;
        return this;
    }
}