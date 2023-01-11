package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditVideoRequestBodySpatialDirectorTimeline {
    @JsonProperty("pitch")
    public Double pitch;
    public EditVideoRequestBodySpatialDirectorTimeline withPitch(Double pitch) {
        this.pitch = pitch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roll")
    public Double roll;
    public EditVideoRequestBodySpatialDirectorTimeline withRoll(Double roll) {
        this.roll = roll;
        return this;
    }
    @JsonProperty("time_code")
    public Double timeCode;
    public EditVideoRequestBodySpatialDirectorTimeline withTimeCode(Double timeCode) {
        this.timeCode = timeCode;
        return this;
    }
    @JsonProperty("yaw")
    public Double yaw;
    public EditVideoRequestBodySpatialDirectorTimeline withYaw(Double yaw) {
        this.yaw = yaw;
        return this;
    }
}