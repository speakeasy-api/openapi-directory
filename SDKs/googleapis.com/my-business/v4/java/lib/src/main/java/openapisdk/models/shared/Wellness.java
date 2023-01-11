package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Wellness
 * Guest facilities at the property to promote or maintain health, beauty, and fitness.
**/
public class Wellness {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctorOnCall")
    public Boolean doctorOnCall;
    public Wellness withDoctorOnCall(Boolean doctorOnCall) {
        this.doctorOnCall = doctorOnCall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctorOnCallException")
    public WellnessDoctorOnCallExceptionEnum doctorOnCallException;
    public Wellness withDoctorOnCallException(WellnessDoctorOnCallExceptionEnum doctorOnCallException) {
        this.doctorOnCallException = doctorOnCallException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ellipticalMachine")
    public Boolean ellipticalMachine;
    public Wellness withEllipticalMachine(Boolean ellipticalMachine) {
        this.ellipticalMachine = ellipticalMachine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ellipticalMachineException")
    public WellnessEllipticalMachineExceptionEnum ellipticalMachineException;
    public Wellness withEllipticalMachineException(WellnessEllipticalMachineExceptionEnum ellipticalMachineException) {
        this.ellipticalMachineException = ellipticalMachineException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fitnessCenter")
    public Boolean fitnessCenter;
    public Wellness withFitnessCenter(Boolean fitnessCenter) {
        this.fitnessCenter = fitnessCenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fitnessCenterException")
    public WellnessFitnessCenterExceptionEnum fitnessCenterException;
    public Wellness withFitnessCenterException(WellnessFitnessCenterExceptionEnum fitnessCenterException) {
        this.fitnessCenterException = fitnessCenterException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeFitnessCenter")
    public Boolean freeFitnessCenter;
    public Wellness withFreeFitnessCenter(Boolean freeFitnessCenter) {
        this.freeFitnessCenter = freeFitnessCenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeFitnessCenterException")
    public WellnessFreeFitnessCenterExceptionEnum freeFitnessCenterException;
    public Wellness withFreeFitnessCenterException(WellnessFreeFitnessCenterExceptionEnum freeFitnessCenterException) {
        this.freeFitnessCenterException = freeFitnessCenterException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeWeights")
    public Boolean freeWeights;
    public Wellness withFreeWeights(Boolean freeWeights) {
        this.freeWeights = freeWeights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeWeightsException")
    public WellnessFreeWeightsExceptionEnum freeWeightsException;
    public Wellness withFreeWeightsException(WellnessFreeWeightsExceptionEnum freeWeightsException) {
        this.freeWeightsException = freeWeightsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("massage")
    public Boolean massage;
    public Wellness withMassage(Boolean massage) {
        this.massage = massage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("massageException")
    public WellnessMassageExceptionEnum massageException;
    public Wellness withMassageException(WellnessMassageExceptionEnum massageException) {
        this.massageException = massageException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salon")
    public Boolean salon;
    public Wellness withSalon(Boolean salon) {
        this.salon = salon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salonException")
    public WellnessSalonExceptionEnum salonException;
    public Wellness withSalonException(WellnessSalonExceptionEnum salonException) {
        this.salonException = salonException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sauna")
    public Boolean sauna;
    public Wellness withSauna(Boolean sauna) {
        this.sauna = sauna;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saunaException")
    public WellnessSaunaExceptionEnum saunaException;
    public Wellness withSaunaException(WellnessSaunaExceptionEnum saunaException) {
        this.saunaException = saunaException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spa")
    public Boolean spa;
    public Wellness withSpa(Boolean spa) {
        this.spa = spa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spaException")
    public WellnessSpaExceptionEnum spaException;
    public Wellness withSpaException(WellnessSpaExceptionEnum spaException) {
        this.spaException = spaException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treadmill")
    public Boolean treadmill;
    public Wellness withTreadmill(Boolean treadmill) {
        this.treadmill = treadmill;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treadmillException")
    public WellnessTreadmillExceptionEnum treadmillException;
    public Wellness withTreadmillException(WellnessTreadmillExceptionEnum treadmillException) {
        this.treadmillException = treadmillException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weightMachine")
    public Boolean weightMachine;
    public Wellness withWeightMachine(Boolean weightMachine) {
        this.weightMachine = weightMachine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weightMachineException")
    public WellnessWeightMachineExceptionEnum weightMachineException;
    public Wellness withWeightMachineException(WellnessWeightMachineExceptionEnum weightMachineException) {
        this.weightMachineException = weightMachineException;
        return this;
    }
}