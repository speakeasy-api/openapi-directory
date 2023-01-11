package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Accessibility
 * Physical adaptations made to the property in consideration of varying levels of human physical ability.
**/
public class Accessibility {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessible")
    public Boolean mobilityAccessible;
    public Accessibility withMobilityAccessible(Boolean mobilityAccessible) {
        this.mobilityAccessible = mobilityAccessible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleElevator")
    public Boolean mobilityAccessibleElevator;
    public Accessibility withMobilityAccessibleElevator(Boolean mobilityAccessibleElevator) {
        this.mobilityAccessibleElevator = mobilityAccessibleElevator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleElevatorException")
    public AccessibilityMobilityAccessibleElevatorExceptionEnum mobilityAccessibleElevatorException;
    public Accessibility withMobilityAccessibleElevatorException(AccessibilityMobilityAccessibleElevatorExceptionEnum mobilityAccessibleElevatorException) {
        this.mobilityAccessibleElevatorException = mobilityAccessibleElevatorException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleException")
    public AccessibilityMobilityAccessibleExceptionEnum mobilityAccessibleException;
    public Accessibility withMobilityAccessibleException(AccessibilityMobilityAccessibleExceptionEnum mobilityAccessibleException) {
        this.mobilityAccessibleException = mobilityAccessibleException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleParking")
    public Boolean mobilityAccessibleParking;
    public Accessibility withMobilityAccessibleParking(Boolean mobilityAccessibleParking) {
        this.mobilityAccessibleParking = mobilityAccessibleParking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessibleParkingException")
    public AccessibilityMobilityAccessibleParkingExceptionEnum mobilityAccessibleParkingException;
    public Accessibility withMobilityAccessibleParkingException(AccessibilityMobilityAccessibleParkingExceptionEnum mobilityAccessibleParkingException) {
        this.mobilityAccessibleParkingException = mobilityAccessibleParkingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessiblePool")
    public Boolean mobilityAccessiblePool;
    public Accessibility withMobilityAccessiblePool(Boolean mobilityAccessiblePool) {
        this.mobilityAccessiblePool = mobilityAccessiblePool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobilityAccessiblePoolException")
    public AccessibilityMobilityAccessiblePoolExceptionEnum mobilityAccessiblePoolException;
    public Accessibility withMobilityAccessiblePoolException(AccessibilityMobilityAccessiblePoolExceptionEnum mobilityAccessiblePoolException) {
        this.mobilityAccessiblePoolException = mobilityAccessiblePoolException;
        return this;
    }
}