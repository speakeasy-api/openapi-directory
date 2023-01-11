package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnergyEfficiency
 * Energy efficiency practices implemented at the hotel.
**/
public class EnergyEfficiency {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carbonFreeEnergySources")
    public Boolean carbonFreeEnergySources;
    public EnergyEfficiency withCarbonFreeEnergySources(Boolean carbonFreeEnergySources) {
        this.carbonFreeEnergySources = carbonFreeEnergySources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carbonFreeEnergySourcesException")
    public EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum carbonFreeEnergySourcesException;
    public EnergyEfficiency withCarbonFreeEnergySourcesException(EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum carbonFreeEnergySourcesException) {
        this.carbonFreeEnergySourcesException = carbonFreeEnergySourcesException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyConservationProgram")
    public Boolean energyConservationProgram;
    public EnergyEfficiency withEnergyConservationProgram(Boolean energyConservationProgram) {
        this.energyConservationProgram = energyConservationProgram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyConservationProgramException")
    public EnergyEfficiencyEnergyConservationProgramExceptionEnum energyConservationProgramException;
    public EnergyEfficiency withEnergyConservationProgramException(EnergyEfficiencyEnergyConservationProgramExceptionEnum energyConservationProgramException) {
        this.energyConservationProgramException = energyConservationProgramException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficientHeatingAndCoolingSystems")
    public Boolean energyEfficientHeatingAndCoolingSystems;
    public EnergyEfficiency withEnergyEfficientHeatingAndCoolingSystems(Boolean energyEfficientHeatingAndCoolingSystems) {
        this.energyEfficientHeatingAndCoolingSystems = energyEfficientHeatingAndCoolingSystems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficientHeatingAndCoolingSystemsException")
    public EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum energyEfficientHeatingAndCoolingSystemsException;
    public EnergyEfficiency withEnergyEfficientHeatingAndCoolingSystemsException(EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum energyEfficientHeatingAndCoolingSystemsException) {
        this.energyEfficientHeatingAndCoolingSystemsException = energyEfficientHeatingAndCoolingSystemsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficientLighting")
    public Boolean energyEfficientLighting;
    public EnergyEfficiency withEnergyEfficientLighting(Boolean energyEfficientLighting) {
        this.energyEfficientLighting = energyEfficientLighting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficientLightingException")
    public EnergyEfficiencyEnergyEfficientLightingExceptionEnum energyEfficientLightingException;
    public EnergyEfficiency withEnergyEfficientLightingException(EnergyEfficiencyEnergyEfficientLightingExceptionEnum energyEfficientLightingException) {
        this.energyEfficientLightingException = energyEfficientLightingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energySavingThermostats")
    public Boolean energySavingThermostats;
    public EnergyEfficiency withEnergySavingThermostats(Boolean energySavingThermostats) {
        this.energySavingThermostats = energySavingThermostats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energySavingThermostatsException")
    public EnergyEfficiencyEnergySavingThermostatsExceptionEnum energySavingThermostatsException;
    public EnergyEfficiency withEnergySavingThermostatsException(EnergyEfficiencyEnergySavingThermostatsExceptionEnum energySavingThermostatsException) {
        this.energySavingThermostatsException = energySavingThermostatsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("greenBuildingDesign")
    public Boolean greenBuildingDesign;
    public EnergyEfficiency withGreenBuildingDesign(Boolean greenBuildingDesign) {
        this.greenBuildingDesign = greenBuildingDesign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("greenBuildingDesignException")
    public EnergyEfficiencyGreenBuildingDesignExceptionEnum greenBuildingDesignException;
    public EnergyEfficiency withGreenBuildingDesignException(EnergyEfficiencyGreenBuildingDesignExceptionEnum greenBuildingDesignException) {
        this.greenBuildingDesignException = greenBuildingDesignException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("independentOrganizationAuditsEnergyUse")
    public Boolean independentOrganizationAuditsEnergyUse;
    public EnergyEfficiency withIndependentOrganizationAuditsEnergyUse(Boolean independentOrganizationAuditsEnergyUse) {
        this.independentOrganizationAuditsEnergyUse = independentOrganizationAuditsEnergyUse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("independentOrganizationAuditsEnergyUseException")
    public EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum independentOrganizationAuditsEnergyUseException;
    public EnergyEfficiency withIndependentOrganizationAuditsEnergyUseException(EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum independentOrganizationAuditsEnergyUseException) {
        this.independentOrganizationAuditsEnergyUseException = independentOrganizationAuditsEnergyUseException;
        return this;
    }
}