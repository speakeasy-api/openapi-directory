package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StopAccessibilityWheelchair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessible_ramp")
    public Boolean accessibleRamp;
    public V3StopAccessibilityWheelchair withAccessibleRamp(Boolean accessibleRamp) {
        this.accessibleRamp = accessibleRamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("low_ticket_counter")
    public Boolean lowTicketCounter;
    public V3StopAccessibilityWheelchair withLowTicketCounter(Boolean lowTicketCounter) {
        this.lowTicketCounter = lowTicketCounter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manouvering")
    public Boolean manouvering;
    public V3StopAccessibilityWheelchair withManouvering(Boolean manouvering) {
        this.manouvering = manouvering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parking")
    public Boolean parking;
    public V3StopAccessibilityWheelchair withParking(Boolean parking) {
        this.parking = parking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("raised_platform")
    public Boolean raisedPlatform;
    public V3StopAccessibilityWheelchair withRaisedPlatform(Boolean raisedPlatform) {
        this.raisedPlatform = raisedPlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("raised_platform_shelther")
    public Boolean raisedPlatformShelther;
    public V3StopAccessibilityWheelchair withRaisedPlatformShelther(Boolean raisedPlatformShelther) {
        this.raisedPlatformShelther = raisedPlatformShelther;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ramp")
    public Boolean ramp;
    public V3StopAccessibilityWheelchair withRamp(Boolean ramp) {
        this.ramp = ramp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondary_path")
    public Boolean secondaryPath;
    public V3StopAccessibilityWheelchair withSecondaryPath(Boolean secondaryPath) {
        this.secondaryPath = secondaryPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steep_ramp")
    public Boolean steepRamp;
    public V3StopAccessibilityWheelchair withSteepRamp(Boolean steepRamp) {
        this.steepRamp = steepRamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephone")
    public Boolean telephone;
    public V3StopAccessibilityWheelchair withTelephone(Boolean telephone) {
        this.telephone = telephone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toilet")
    public Boolean toilet;
    public V3StopAccessibilityWheelchair withToilet(Boolean toilet) {
        this.toilet = toilet;
        return this;
    }
}