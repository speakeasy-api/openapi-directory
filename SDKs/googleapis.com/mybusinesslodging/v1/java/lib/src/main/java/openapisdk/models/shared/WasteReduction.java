package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WasteReduction
 * Waste reduction practices implemented at the hotel.
**/
public class WasteReduction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compostableFoodContainersAndCutlery")
    public Boolean compostableFoodContainersAndCutlery;
    public WasteReduction withCompostableFoodContainersAndCutlery(Boolean compostableFoodContainersAndCutlery) {
        this.compostableFoodContainersAndCutlery = compostableFoodContainersAndCutlery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compostableFoodContainersAndCutleryException")
    public WasteReductionCompostableFoodContainersAndCutleryExceptionEnum compostableFoodContainersAndCutleryException;
    public WasteReduction withCompostableFoodContainersAndCutleryException(WasteReductionCompostableFoodContainersAndCutleryExceptionEnum compostableFoodContainersAndCutleryException) {
        this.compostableFoodContainersAndCutleryException = compostableFoodContainersAndCutleryException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compostsExcessFood")
    public Boolean compostsExcessFood;
    public WasteReduction withCompostsExcessFood(Boolean compostsExcessFood) {
        this.compostsExcessFood = compostsExcessFood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compostsExcessFoodException")
    public WasteReductionCompostsExcessFoodExceptionEnum compostsExcessFoodException;
    public WasteReduction withCompostsExcessFoodException(WasteReductionCompostsExcessFoodExceptionEnum compostsExcessFoodException) {
        this.compostsExcessFoodException = compostsExcessFoodException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("donatesExcessFood")
    public Boolean donatesExcessFood;
    public WasteReduction withDonatesExcessFood(Boolean donatesExcessFood) {
        this.donatesExcessFood = donatesExcessFood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("donatesExcessFoodException")
    public WasteReductionDonatesExcessFoodExceptionEnum donatesExcessFoodException;
    public WasteReduction withDonatesExcessFoodException(WasteReductionDonatesExcessFoodExceptionEnum donatesExcessFoodException) {
        this.donatesExcessFoodException = donatesExcessFoodException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foodWasteReductionProgram")
    public Boolean foodWasteReductionProgram;
    public WasteReduction withFoodWasteReductionProgram(Boolean foodWasteReductionProgram) {
        this.foodWasteReductionProgram = foodWasteReductionProgram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foodWasteReductionProgramException")
    public WasteReductionFoodWasteReductionProgramExceptionEnum foodWasteReductionProgramException;
    public WasteReduction withFoodWasteReductionProgramException(WasteReductionFoodWasteReductionProgramExceptionEnum foodWasteReductionProgramException) {
        this.foodWasteReductionProgramException = foodWasteReductionProgramException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noSingleUsePlasticStraws")
    public Boolean noSingleUsePlasticStraws;
    public WasteReduction withNoSingleUsePlasticStraws(Boolean noSingleUsePlasticStraws) {
        this.noSingleUsePlasticStraws = noSingleUsePlasticStraws;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noSingleUsePlasticStrawsException")
    public WasteReductionNoSingleUsePlasticStrawsExceptionEnum noSingleUsePlasticStrawsException;
    public WasteReduction withNoSingleUsePlasticStrawsException(WasteReductionNoSingleUsePlasticStrawsExceptionEnum noSingleUsePlasticStrawsException) {
        this.noSingleUsePlasticStrawsException = noSingleUsePlasticStrawsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noSingleUsePlasticWaterBottles")
    public Boolean noSingleUsePlasticWaterBottles;
    public WasteReduction withNoSingleUsePlasticWaterBottles(Boolean noSingleUsePlasticWaterBottles) {
        this.noSingleUsePlasticWaterBottles = noSingleUsePlasticWaterBottles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noSingleUsePlasticWaterBottlesException")
    public WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum noSingleUsePlasticWaterBottlesException;
    public WasteReduction withNoSingleUsePlasticWaterBottlesException(WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum noSingleUsePlasticWaterBottlesException) {
        this.noSingleUsePlasticWaterBottlesException = noSingleUsePlasticWaterBottlesException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noStyrofoamFoodContainers")
    public Boolean noStyrofoamFoodContainers;
    public WasteReduction withNoStyrofoamFoodContainers(Boolean noStyrofoamFoodContainers) {
        this.noStyrofoamFoodContainers = noStyrofoamFoodContainers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noStyrofoamFoodContainersException")
    public WasteReductionNoStyrofoamFoodContainersExceptionEnum noStyrofoamFoodContainersException;
    public WasteReduction withNoStyrofoamFoodContainersException(WasteReductionNoStyrofoamFoodContainersExceptionEnum noStyrofoamFoodContainersException) {
        this.noStyrofoamFoodContainersException = noStyrofoamFoodContainersException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recyclingProgram")
    public Boolean recyclingProgram;
    public WasteReduction withRecyclingProgram(Boolean recyclingProgram) {
        this.recyclingProgram = recyclingProgram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recyclingProgramException")
    public WasteReductionRecyclingProgramExceptionEnum recyclingProgramException;
    public WasteReduction withRecyclingProgramException(WasteReductionRecyclingProgramExceptionEnum recyclingProgramException) {
        this.recyclingProgramException = recyclingProgramException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refillableToiletryContainers")
    public Boolean refillableToiletryContainers;
    public WasteReduction withRefillableToiletryContainers(Boolean refillableToiletryContainers) {
        this.refillableToiletryContainers = refillableToiletryContainers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refillableToiletryContainersException")
    public WasteReductionRefillableToiletryContainersExceptionEnum refillableToiletryContainersException;
    public WasteReduction withRefillableToiletryContainersException(WasteReductionRefillableToiletryContainersExceptionEnum refillableToiletryContainersException) {
        this.refillableToiletryContainersException = refillableToiletryContainersException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safelyDisposesBatteries")
    public Boolean safelyDisposesBatteries;
    public WasteReduction withSafelyDisposesBatteries(Boolean safelyDisposesBatteries) {
        this.safelyDisposesBatteries = safelyDisposesBatteries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safelyDisposesBatteriesException")
    public WasteReductionSafelyDisposesBatteriesExceptionEnum safelyDisposesBatteriesException;
    public WasteReduction withSafelyDisposesBatteriesException(WasteReductionSafelyDisposesBatteriesExceptionEnum safelyDisposesBatteriesException) {
        this.safelyDisposesBatteriesException = safelyDisposesBatteriesException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safelyDisposesElectronics")
    public Boolean safelyDisposesElectronics;
    public WasteReduction withSafelyDisposesElectronics(Boolean safelyDisposesElectronics) {
        this.safelyDisposesElectronics = safelyDisposesElectronics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safelyDisposesElectronicsException")
    public WasteReductionSafelyDisposesElectronicsExceptionEnum safelyDisposesElectronicsException;
    public WasteReduction withSafelyDisposesElectronicsException(WasteReductionSafelyDisposesElectronicsExceptionEnum safelyDisposesElectronicsException) {
        this.safelyDisposesElectronicsException = safelyDisposesElectronicsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safelyDisposesLightbulbs")
    public Boolean safelyDisposesLightbulbs;
    public WasteReduction withSafelyDisposesLightbulbs(Boolean safelyDisposesLightbulbs) {
        this.safelyDisposesLightbulbs = safelyDisposesLightbulbs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safelyDisposesLightbulbsException")
    public WasteReductionSafelyDisposesLightbulbsExceptionEnum safelyDisposesLightbulbsException;
    public WasteReduction withSafelyDisposesLightbulbsException(WasteReductionSafelyDisposesLightbulbsExceptionEnum safelyDisposesLightbulbsException) {
        this.safelyDisposesLightbulbsException = safelyDisposesLightbulbsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safelyHandlesHazardousSubstances")
    public Boolean safelyHandlesHazardousSubstances;
    public WasteReduction withSafelyHandlesHazardousSubstances(Boolean safelyHandlesHazardousSubstances) {
        this.safelyHandlesHazardousSubstances = safelyHandlesHazardousSubstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safelyHandlesHazardousSubstancesException")
    public WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum safelyHandlesHazardousSubstancesException;
    public WasteReduction withSafelyHandlesHazardousSubstancesException(WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum safelyHandlesHazardousSubstancesException) {
        this.safelyHandlesHazardousSubstancesException = safelyHandlesHazardousSubstancesException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soapDonationProgram")
    public Boolean soapDonationProgram;
    public WasteReduction withSoapDonationProgram(Boolean soapDonationProgram) {
        this.soapDonationProgram = soapDonationProgram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soapDonationProgramException")
    public WasteReductionSoapDonationProgramExceptionEnum soapDonationProgramException;
    public WasteReduction withSoapDonationProgramException(WasteReductionSoapDonationProgramExceptionEnum soapDonationProgramException) {
        this.soapDonationProgramException = soapDonationProgramException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toiletryDonationProgram")
    public Boolean toiletryDonationProgram;
    public WasteReduction withToiletryDonationProgram(Boolean toiletryDonationProgram) {
        this.toiletryDonationProgram = toiletryDonationProgram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toiletryDonationProgramException")
    public WasteReductionToiletryDonationProgramExceptionEnum toiletryDonationProgramException;
    public WasteReduction withToiletryDonationProgramException(WasteReductionToiletryDonationProgramExceptionEnum toiletryDonationProgramException) {
        this.toiletryDonationProgramException = toiletryDonationProgramException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterBottleFillingStations")
    public Boolean waterBottleFillingStations;
    public WasteReduction withWaterBottleFillingStations(Boolean waterBottleFillingStations) {
        this.waterBottleFillingStations = waterBottleFillingStations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterBottleFillingStationsException")
    public WasteReductionWaterBottleFillingStationsExceptionEnum waterBottleFillingStationsException;
    public WasteReduction withWaterBottleFillingStationsException(WasteReductionWaterBottleFillingStationsExceptionEnum waterBottleFillingStationsException) {
        this.waterBottleFillingStationsException = waterBottleFillingStationsException;
        return this;
    }
}