package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SustainabilityInput
 * Sustainability practices implemented at the hotel.
**/
public class SustainabilityInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficiency")
    public EnergyEfficiencyInput energyEfficiency;
    public SustainabilityInput withEnergyEfficiency(EnergyEfficiencyInput energyEfficiency) {
        this.energyEfficiency = energyEfficiency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sustainabilityCertifications")
    public SustainabilityCertifications sustainabilityCertifications;
    public SustainabilityInput withSustainabilityCertifications(SustainabilityCertifications sustainabilityCertifications) {
        this.sustainabilityCertifications = sustainabilityCertifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sustainableSourcing")
    public SustainableSourcing sustainableSourcing;
    public SustainabilityInput withSustainableSourcing(SustainableSourcing sustainableSourcing) {
        this.sustainableSourcing = sustainableSourcing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wasteReduction")
    public WasteReduction wasteReduction;
    public SustainabilityInput withWasteReduction(WasteReduction wasteReduction) {
        this.wasteReduction = wasteReduction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterConservation")
    public WaterConservation waterConservation;
    public SustainabilityInput withWaterConservation(WaterConservation waterConservation) {
        this.waterConservation = waterConservation;
        return this;
    }
}