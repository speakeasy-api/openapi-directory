package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EstimatedDiameterContainer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feet")
    public EstimatedDiameter feet;
    public EstimatedDiameterContainer withFeet(EstimatedDiameter feet) {
        this.feet = feet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kilometers")
    public EstimatedDiameter kilometers;
    public EstimatedDiameterContainer withKilometers(EstimatedDiameter kilometers) {
        this.kilometers = kilometers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meters")
    public EstimatedDiameter meters;
    public EstimatedDiameterContainer withMeters(EstimatedDiameter meters) {
        this.meters = meters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miles")
    public EstimatedDiameter miles;
    public EstimatedDiameterContainer withMiles(EstimatedDiameter miles) {
        this.miles = miles;
        return this;
    }
}