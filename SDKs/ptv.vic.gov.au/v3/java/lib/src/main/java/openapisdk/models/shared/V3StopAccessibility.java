package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StopAccessibility {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_customer_information")
    public Boolean audioCustomerInformation;
    public V3StopAccessibility withAudioCustomerInformation(Boolean audioCustomerInformation) {
        this.audioCustomerInformation = audioCustomerInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("escalator")
    public Boolean escalator;
    public V3StopAccessibility withEscalator(Boolean escalator) {
        this.escalator = escalator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hearing_loop")
    public Boolean hearingLoop;
    public V3StopAccessibility withHearingLoop(Boolean hearingLoop) {
        this.hearingLoop = hearingLoop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lift")
    public Boolean lift;
    public V3StopAccessibility withLift(Boolean lift) {
        this.lift = lift;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lighting")
    public Boolean lighting;
    public V3StopAccessibility withLighting(Boolean lighting) {
        this.lighting = lighting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform_number")
    public Integer platformNumber;
    public V3StopAccessibility withPlatformNumber(Integer platformNumber) {
        this.platformNumber = platformNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stairs")
    public Boolean stairs;
    public V3StopAccessibility withStairs(Boolean stairs) {
        this.stairs = stairs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_accessible")
    public Boolean stopAccessible;
    public V3StopAccessibility withStopAccessible(Boolean stopAccessible) {
        this.stopAccessible = stopAccessible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tactile_ground_surface_indicator")
    public Boolean tactileGroundSurfaceIndicator;
    public V3StopAccessibility withTactileGroundSurfaceIndicator(Boolean tactileGroundSurfaceIndicator) {
        this.tactileGroundSurfaceIndicator = tactileGroundSurfaceIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public V3StopAccessibility withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wheelchair")
    public V3StopAccessibilityWheelchair wheelchair;
    public V3StopAccessibility withWheelchair(V3StopAccessibilityWheelchair wheelchair) {
        this.wheelchair = wheelchair;
        return this;
    }
}