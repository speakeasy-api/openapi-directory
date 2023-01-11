package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnergyEfficiencyInput
 * Energy efficiency practices implemented at the hotel.
**/
public class EnergyEfficiencyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carbonFreeEnergySources")
    public Boolean carbonFreeEnergySources;
    public EnergyEfficiencyInput withCarbonFreeEnergySources(Boolean carbonFreeEnergySources) {
        this.carbonFreeEnergySources = carbonFreeEnergySources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carbonFreeEnergySourcesException")
    public EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum carbonFreeEnergySourcesException;
    public EnergyEfficiencyInput withCarbonFreeEnergySourcesException(EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum carbonFreeEnergySourcesException) {
        this.carbonFreeEnergySourcesException = carbonFreeEnergySourcesException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyConservationProgram")
    public Boolean energyConservationProgram;
    public EnergyEfficiencyInput withEnergyConservationProgram(Boolean energyConservationProgram) {
        this.energyConservationProgram = energyConservationProgram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyConservationProgramException")
    public EnergyEfficiencyEnergyConservationProgramExceptionEnum energyConservationProgramException;
    public EnergyEfficiencyInput withEnergyConservationProgramException(EnergyEfficiencyEnergyConservationProgramExceptionEnum energyConservationProgramException) {
        this.energyConservationProgramException = energyConservationProgramException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficientHeatingAndCoolingSystems")
    public Boolean energyEfficientHeatingAndCoolingSystems;
    public EnergyEfficiencyInput withEnergyEfficientHeatingAndCoolingSystems(Boolean energyEfficientHeatingAndCoolingSystems) {
        this.energyEfficientHeatingAndCoolingSystems = energyEfficientHeatingAndCoolingSystems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficientHeatingAndCoolingSystemsException")
    public EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum energyEfficientHeatingAndCoolingSystemsException;
    public EnergyEfficiencyInput withEnergyEfficientHeatingAndCoolingSystemsException(EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum energyEfficientHeatingAndCoolingSystemsException) {
        this.energyEfficientHeatingAndCoolingSystemsException = energyEfficientHeatingAndCoolingSystemsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficientLighting")
    public Boolean energyEfficientLighting;
    public EnergyEfficiencyInput withEnergyEfficientLighting(Boolean energyEfficientLighting) {
        this.energyEfficientLighting = energyEfficientLighting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficientLightingException")
    public EnergyEfficiencyEnergyEfficientLightingExceptionEnum energyEfficientLightingException;
    public EnergyEfficiencyInput withEnergyEfficientLightingException(EnergyEfficiencyEnergyEfficientLightingExceptionEnum energyEfficientLightingException) {
        this.energyEfficientLightingException = energyEfficientLightingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energySavingThermostats")
    public Boolean energySavingThermostats;
    public EnergyEfficiencyInput withEnergySavingThermostats(Boolean energySavingThermostats) {
        this.energySavingThermostats = energySavingThermostats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energySavingThermostatsException")
    public EnergyEfficiencyEnergySavingThermostatsExceptionEnum energySavingThermostatsException;
    public EnergyEfficiencyInput withEnergySavingThermostatsException(EnergyEfficiencyEnergySavingThermostatsExceptionEnum energySavingThermostatsException) {
        this.energySavingThermostatsException = energySavingThermostatsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("independentOrganizationAuditsEnergyUse")
    public Boolean independentOrganizationAuditsEnergyUse;
    public EnergyEfficiencyInput withIndependentOrganizationAuditsEnergyUse(Boolean independentOrganizationAuditsEnergyUse) {
        this.independentOrganizationAuditsEnergyUse = independentOrganizationAuditsEnergyUse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("independentOrganizationAuditsEnergyUseException")
    public EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum independentOrganizationAuditsEnergyUseException;
    public EnergyEfficiencyInput withIndependentOrganizationAuditsEnergyUseException(EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum independentOrganizationAuditsEnergyUseException) {
        this.independentOrganizationAuditsEnergyUseException = independentOrganizationAuditsEnergyUseException;
        return this;
    }
}