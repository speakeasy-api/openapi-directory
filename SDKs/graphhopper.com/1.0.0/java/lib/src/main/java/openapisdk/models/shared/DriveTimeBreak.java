package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DriveTimeBreak {
    @JsonProperty("duration")
    public Long duration;
    public DriveTimeBreak withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initial_driving_time")
    public Long initialDrivingTime;
    public DriveTimeBreak withInitialDrivingTime(Long initialDrivingTime) {
        this.initialDrivingTime = initialDrivingTime;
        return this;
    }
    @JsonProperty("max_driving_time")
    public Long maxDrivingTime;
    public DriveTimeBreak withMaxDrivingTime(Long maxDrivingTime) {
        this.maxDrivingTime = maxDrivingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("possible_split")
    public Long[] possibleSplit;
    public DriveTimeBreak withPossibleSplit(Long[] possibleSplit) {
        this.possibleSplit = possibleSplit;
        return this;
    }
}