package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Permission {
    @JsonProperty("accessMode")
    public PermissionAccessModeEnum accessMode;
    public Permission withAccessMode(PermissionAccessModeEnum accessMode) {
        this.accessMode = accessMode;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("dataEraseAt")
    public OffsetDateTime dataEraseAt;
    public Permission withDataEraseAt(OffsetDateTime dataEraseAt) {
        this.dataEraseAt = dataEraseAt;
        return this;
    }
    @JsonProperty("dateRange")
    public PermissionDateRange dateRange;
    public Permission withDateRange(PermissionDateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonProperty("frequency")
    public PermissionFrequency frequency;
    public Permission withFrequency(PermissionFrequency frequency) {
        this.frequency = frequency;
        return this;
    }
}