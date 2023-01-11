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
 * Meta
 * Meta Data relevant to the payload
**/
public class Meta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FirstAvailableDateTime")
    public OffsetDateTime firstAvailableDateTime;
    public Meta withFirstAvailableDateTime(OffsetDateTime firstAvailableDateTime) {
        this.firstAvailableDateTime = firstAvailableDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastAvailableDateTime")
    public OffsetDateTime lastAvailableDateTime;
    public Meta withLastAvailableDateTime(OffsetDateTime lastAvailableDateTime) {
        this.lastAvailableDateTime = lastAvailableDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalPages")
    public Integer totalPages;
    public Meta withTotalPages(Integer totalPages) {
        this.totalPages = totalPages;
        return this;
    }
}