package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppStartTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullyDrawnTime")
    public Duration fullyDrawnTime;
    public AppStartTime withFullyDrawnTime(Duration fullyDrawnTime) {
        this.fullyDrawnTime = fullyDrawnTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialDisplayTime")
    public Duration initialDisplayTime;
    public AppStartTime withInitialDisplayTime(Duration initialDisplayTime) {
        this.initialDisplayTime = initialDisplayTime;
        return this;
    }
}