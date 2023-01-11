package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Sustainability
 * Sustainability practices implemented at the hotel.
**/
public class Sustainability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficiency")
    public EnergyEfficiency energyEfficiency;
    public Sustainability withEnergyEfficiency(EnergyEfficiency energyEfficiency) {
        this.energyEfficiency = energyEfficiency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sustainabilityCertifications")
    public SustainabilityCertifications sustainabilityCertifications;
    public Sustainability withSustainabilityCertifications(SustainabilityCertifications sustainabilityCertifications) {
        this.sustainabilityCertifications = sustainabilityCertifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sustainableSourcing")
    public SustainableSourcing sustainableSourcing;
    public Sustainability withSustainableSourcing(SustainableSourcing sustainableSourcing) {
        this.sustainableSourcing = sustainableSourcing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wasteReduction")
    public WasteReduction wasteReduction;
    public Sustainability withWasteReduction(WasteReduction wasteReduction) {
        this.wasteReduction = wasteReduction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterConservation")
    public WaterConservation waterConservation;
    public Sustainability withWaterConservation(WaterConservation waterConservation) {
        this.waterConservation = waterConservation;
        return this;
    }
}