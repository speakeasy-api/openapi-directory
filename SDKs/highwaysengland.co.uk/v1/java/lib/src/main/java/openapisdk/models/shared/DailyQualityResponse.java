package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DailyQualityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Qualities")
    public Qualities[] qualities;
    public DailyQualityResponse withQualities(Qualities[] qualities) {
        this.qualities = qualities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row_count")
    public Integer rowCount;
    public DailyQualityResponse withRowCount(Integer rowCount) {
        this.rowCount = rowCount;
        return this;
    }
}