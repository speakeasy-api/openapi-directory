package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimeWindow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("earliest")
    public Long earliest;
    public TimeWindow withEarliest(Long earliest) {
        this.earliest = earliest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest")
    public Long latest;
    public TimeWindow withLatest(Long latest) {
        this.latest = latest;
        return this;
    }
}