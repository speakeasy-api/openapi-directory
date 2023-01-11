package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Updated {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("at")
    public OffsetDateTime at;
    public Updated withAt(OffsetDateTime at) {
        this.at = at;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("by")
    public UpdatedBy by;
    public Updated withBy(UpdatedBy by) {
        this.by = by;
        return this;
    }
}