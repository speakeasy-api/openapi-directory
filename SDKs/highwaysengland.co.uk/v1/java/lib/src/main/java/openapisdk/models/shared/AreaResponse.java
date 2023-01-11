package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AreaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("areas")
    public Area[] areas;
    public AreaResponse withAreas(Area[] areas) {
        this.areas = areas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row_count")
    public Integer rowCount;
    public AreaResponse withRowCount(Integer rowCount) {
        this.rowCount = rowCount;
        return this;
    }
}