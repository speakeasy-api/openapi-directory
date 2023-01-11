package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LivingAreaSleeping
 * Information about sleeping features in the living area.
**/
public class LivingAreaSleeping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bedsCount")
    public Integer bedsCount;
    public LivingAreaSleeping withBedsCount(Integer bedsCount) {
        this.bedsCount = bedsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bedsCountException")
    public LivingAreaSleepingBedsCountExceptionEnum bedsCountException;
    public LivingAreaSleeping withBedsCountException(LivingAreaSleepingBedsCountExceptionEnum bedsCountException) {
        this.bedsCountException = bedsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bunkBedsCount")
    public Integer bunkBedsCount;
    public LivingAreaSleeping withBunkBedsCount(Integer bunkBedsCount) {
        this.bunkBedsCount = bunkBedsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bunkBedsCountException")
    public LivingAreaSleepingBunkBedsCountExceptionEnum bunkBedsCountException;
    public LivingAreaSleeping withBunkBedsCountException(LivingAreaSleepingBunkBedsCountExceptionEnum bunkBedsCountException) {
        this.bunkBedsCountException = bunkBedsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cribsCount")
    public Integer cribsCount;
    public LivingAreaSleeping withCribsCount(Integer cribsCount) {
        this.cribsCount = cribsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cribsCountException")
    public LivingAreaSleepingCribsCountExceptionEnum cribsCountException;
    public LivingAreaSleeping withCribsCountException(LivingAreaSleepingCribsCountExceptionEnum cribsCountException) {
        this.cribsCountException = cribsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doubleBedsCount")
    public Integer doubleBedsCount;
    public LivingAreaSleeping withDoubleBedsCount(Integer doubleBedsCount) {
        this.doubleBedsCount = doubleBedsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doubleBedsCountException")
    public LivingAreaSleepingDoubleBedsCountExceptionEnum doubleBedsCountException;
    public LivingAreaSleeping withDoubleBedsCountException(LivingAreaSleepingDoubleBedsCountExceptionEnum doubleBedsCountException) {
        this.doubleBedsCountException = doubleBedsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featherPillows")
    public Boolean featherPillows;
    public LivingAreaSleeping withFeatherPillows(Boolean featherPillows) {
        this.featherPillows = featherPillows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featherPillowsException")
    public LivingAreaSleepingFeatherPillowsExceptionEnum featherPillowsException;
    public LivingAreaSleeping withFeatherPillowsException(LivingAreaSleepingFeatherPillowsExceptionEnum featherPillowsException) {
        this.featherPillowsException = featherPillowsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hypoallergenicBedding")
    public Boolean hypoallergenicBedding;
    public LivingAreaSleeping withHypoallergenicBedding(Boolean hypoallergenicBedding) {
        this.hypoallergenicBedding = hypoallergenicBedding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hypoallergenicBeddingException")
    public LivingAreaSleepingHypoallergenicBeddingExceptionEnum hypoallergenicBeddingException;
    public LivingAreaSleeping withHypoallergenicBeddingException(LivingAreaSleepingHypoallergenicBeddingExceptionEnum hypoallergenicBeddingException) {
        this.hypoallergenicBeddingException = hypoallergenicBeddingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kingBedsCount")
    public Integer kingBedsCount;
    public LivingAreaSleeping withKingBedsCount(Integer kingBedsCount) {
        this.kingBedsCount = kingBedsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kingBedsCountException")
    public LivingAreaSleepingKingBedsCountExceptionEnum kingBedsCountException;
    public LivingAreaSleeping withKingBedsCountException(LivingAreaSleepingKingBedsCountExceptionEnum kingBedsCountException) {
        this.kingBedsCountException = kingBedsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryFoamPillows")
    public Boolean memoryFoamPillows;
    public LivingAreaSleeping withMemoryFoamPillows(Boolean memoryFoamPillows) {
        this.memoryFoamPillows = memoryFoamPillows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryFoamPillowsException")
    public LivingAreaSleepingMemoryFoamPillowsExceptionEnum memoryFoamPillowsException;
    public LivingAreaSleeping withMemoryFoamPillowsException(LivingAreaSleepingMemoryFoamPillowsExceptionEnum memoryFoamPillowsException) {
        this.memoryFoamPillowsException = memoryFoamPillowsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherBedsCount")
    public Integer otherBedsCount;
    public LivingAreaSleeping withOtherBedsCount(Integer otherBedsCount) {
        this.otherBedsCount = otherBedsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherBedsCountException")
    public LivingAreaSleepingOtherBedsCountExceptionEnum otherBedsCountException;
    public LivingAreaSleeping withOtherBedsCountException(LivingAreaSleepingOtherBedsCountExceptionEnum otherBedsCountException) {
        this.otherBedsCountException = otherBedsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queenBedsCount")
    public Integer queenBedsCount;
    public LivingAreaSleeping withQueenBedsCount(Integer queenBedsCount) {
        this.queenBedsCount = queenBedsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queenBedsCountException")
    public LivingAreaSleepingQueenBedsCountExceptionEnum queenBedsCountException;
    public LivingAreaSleeping withQueenBedsCountException(LivingAreaSleepingQueenBedsCountExceptionEnum queenBedsCountException) {
        this.queenBedsCountException = queenBedsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollAwayBedsCount")
    public Integer rollAwayBedsCount;
    public LivingAreaSleeping withRollAwayBedsCount(Integer rollAwayBedsCount) {
        this.rollAwayBedsCount = rollAwayBedsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollAwayBedsCountException")
    public LivingAreaSleepingRollAwayBedsCountExceptionEnum rollAwayBedsCountException;
    public LivingAreaSleeping withRollAwayBedsCountException(LivingAreaSleepingRollAwayBedsCountExceptionEnum rollAwayBedsCountException) {
        this.rollAwayBedsCountException = rollAwayBedsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("singleOrTwinBedsCount")
    public Integer singleOrTwinBedsCount;
    public LivingAreaSleeping withSingleOrTwinBedsCount(Integer singleOrTwinBedsCount) {
        this.singleOrTwinBedsCount = singleOrTwinBedsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("singleOrTwinBedsCountException")
    public LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum singleOrTwinBedsCountException;
    public LivingAreaSleeping withSingleOrTwinBedsCountException(LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum singleOrTwinBedsCountException) {
        this.singleOrTwinBedsCountException = singleOrTwinBedsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sofaBedsCount")
    public Integer sofaBedsCount;
    public LivingAreaSleeping withSofaBedsCount(Integer sofaBedsCount) {
        this.sofaBedsCount = sofaBedsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sofaBedsCountException")
    public LivingAreaSleepingSofaBedsCountExceptionEnum sofaBedsCountException;
    public LivingAreaSleeping withSofaBedsCountException(LivingAreaSleepingSofaBedsCountExceptionEnum sofaBedsCountException) {
        this.sofaBedsCountException = sofaBedsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syntheticPillows")
    public Boolean syntheticPillows;
    public LivingAreaSleeping withSyntheticPillows(Boolean syntheticPillows) {
        this.syntheticPillows = syntheticPillows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syntheticPillowsException")
    public LivingAreaSleepingSyntheticPillowsExceptionEnum syntheticPillowsException;
    public LivingAreaSleeping withSyntheticPillowsException(LivingAreaSleepingSyntheticPillowsExceptionEnum syntheticPillowsException) {
        this.syntheticPillowsException = syntheticPillowsException;
        return this;
    }
}