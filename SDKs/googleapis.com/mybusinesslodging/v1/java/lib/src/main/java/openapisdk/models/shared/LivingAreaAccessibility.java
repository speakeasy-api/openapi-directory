package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LivingAreaAccessibility
 * Accessibility features of the living area.
**/
public class LivingAreaAccessibility {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adaCompliantUnit")
    public Boolean adaCompliantUnit;
    public LivingAreaAccessibility withAdaCompliantUnit(Boolean adaCompliantUnit) {
        this.adaCompliantUnit = adaCompliantUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adaCompliantUnitException")
    public LivingAreaAccessibilityAdaCompliantUnitExceptionEnum adaCompliantUnitException;
    public LivingAreaAccessibility withAdaCompliantUnitException(LivingAreaAccessibilityAdaCompliantUnitExceptionEnum adaCompliantUnitException) {
        this.adaCompliantUnitException = adaCompliantUnitException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hearingAccessibleDoorbell")
    public Boolean hearingAccessibleDoorbell;
    public LivingAreaAccessibility withHearingAccessibleDoorbell(Boolean hearingAccessibleDoorbell) {
        this.hearingAccessibleDoorbell = hearingAccessibleDoorbell;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hearingAccessibleDoorbellException")
    public LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum hearingAccessibleDoorbellException;
    public LivingAreaAccessibility withHearingAccessibleDoorbellException(LivingAreaAccessibilityHearingAccessibleDoorbellExceptionEnum hearingAccessibleDoorbellException) {
        this.hearingAccessibleDoorbellException = hearingAccessibleDoorbellException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hearingAccessibleFireAlarm")
    public Boolean hearingAccessibleFireAlarm;
    public LivingAreaAccessibility withHearingAccessibleFireAlarm(Boolean hearingAccessibleFireAlarm) {
        this.hearingAccessibleFireAlarm = hearingAccessibleFireAlarm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hearingAccessibleFireAlarmException")
    public LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum hearingAccessibleFireAlarmException;
    public LivingAreaAccessibility withHearingAccessibleFireAlarmException(LivingAreaAccessibilityHearingAccessibleFireAlarmExceptionEnum hearingAccessibleFireAlarmException) {
        this.hearingAccessibleFireAlarmException = hearingAccessibleFireAlarmException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hearingAccessibleUnit")
    public Boolean hearingAccessibleUnit;
    public LivingAreaAccessibility withHearingAccessibleUnit(Boolean hearingAccessibleUnit) {
        this.hearingAccessibleUnit = hearingAccessibleUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hearingAccessibleUnitException")
    public LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum hearingAccessibleUnitException;
    public LivingAreaAccessibility withHearingAccessibleUnitException(LivingAreaAccessibilityHearingAccessibleUnitExceptionEnum hearingAccessibleUnitException) {
        this.hearingAccessibleUnitException = hearingAccessibleUnitException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleBathtub")
    public Boolean mobilityAccessibleBathtub;
    public LivingAreaAccessibility withMobilityAccessibleBathtub(Boolean mobilityAccessibleBathtub) {
        this.mobilityAccessibleBathtub = mobilityAccessibleBathtub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleBathtubException")
    public LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum mobilityAccessibleBathtubException;
    public LivingAreaAccessibility withMobilityAccessibleBathtubException(LivingAreaAccessibilityMobilityAccessibleBathtubExceptionEnum mobilityAccessibleBathtubException) {
        this.mobilityAccessibleBathtubException = mobilityAccessibleBathtubException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleShower")
    public Boolean mobilityAccessibleShower;
    public LivingAreaAccessibility withMobilityAccessibleShower(Boolean mobilityAccessibleShower) {
        this.mobilityAccessibleShower = mobilityAccessibleShower;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleShowerException")
    public LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum mobilityAccessibleShowerException;
    public LivingAreaAccessibility withMobilityAccessibleShowerException(LivingAreaAccessibilityMobilityAccessibleShowerExceptionEnum mobilityAccessibleShowerException) {
        this.mobilityAccessibleShowerException = mobilityAccessibleShowerException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleToilet")
    public Boolean mobilityAccessibleToilet;
    public LivingAreaAccessibility withMobilityAccessibleToilet(Boolean mobilityAccessibleToilet) {
        this.mobilityAccessibleToilet = mobilityAccessibleToilet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleToiletException")
    public LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum mobilityAccessibleToiletException;
    public LivingAreaAccessibility withMobilityAccessibleToiletException(LivingAreaAccessibilityMobilityAccessibleToiletExceptionEnum mobilityAccessibleToiletException) {
        this.mobilityAccessibleToiletException = mobilityAccessibleToiletException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleUnit")
    public Boolean mobilityAccessibleUnit;
    public LivingAreaAccessibility withMobilityAccessibleUnit(Boolean mobilityAccessibleUnit) {
        this.mobilityAccessibleUnit = mobilityAccessibleUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleUnitException")
    public LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum mobilityAccessibleUnitException;
    public LivingAreaAccessibility withMobilityAccessibleUnitException(LivingAreaAccessibilityMobilityAccessibleUnitExceptionEnum mobilityAccessibleUnitException) {
        this.mobilityAccessibleUnitException = mobilityAccessibleUnitException;
        return this;
    }
}