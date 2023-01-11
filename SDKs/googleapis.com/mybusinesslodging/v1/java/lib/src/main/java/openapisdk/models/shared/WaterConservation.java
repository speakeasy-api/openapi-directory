package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WaterConservation
 * Water conservation practices implemented at the hotel.
**/
public class WaterConservation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("independentOrganizationAuditsWaterUse")
    public Boolean independentOrganizationAuditsWaterUse;
    public WaterConservation withIndependentOrganizationAuditsWaterUse(Boolean independentOrganizationAuditsWaterUse) {
        this.independentOrganizationAuditsWaterUse = independentOrganizationAuditsWaterUse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("independentOrganizationAuditsWaterUseException")
    public WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum independentOrganizationAuditsWaterUseException;
    public WaterConservation withIndependentOrganizationAuditsWaterUseException(WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum independentOrganizationAuditsWaterUseException) {
        this.independentOrganizationAuditsWaterUseException = independentOrganizationAuditsWaterUseException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linenReuseProgram")
    public Boolean linenReuseProgram;
    public WaterConservation withLinenReuseProgram(Boolean linenReuseProgram) {
        this.linenReuseProgram = linenReuseProgram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linenReuseProgramException")
    public WaterConservationLinenReuseProgramExceptionEnum linenReuseProgramException;
    public WaterConservation withLinenReuseProgramException(WaterConservationLinenReuseProgramExceptionEnum linenReuseProgramException) {
        this.linenReuseProgramException = linenReuseProgramException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("towelReuseProgram")
    public Boolean towelReuseProgram;
    public WaterConservation withTowelReuseProgram(Boolean towelReuseProgram) {
        this.towelReuseProgram = towelReuseProgram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("towelReuseProgramException")
    public WaterConservationTowelReuseProgramExceptionEnum towelReuseProgramException;
    public WaterConservation withTowelReuseProgramException(WaterConservationTowelReuseProgramExceptionEnum towelReuseProgramException) {
        this.towelReuseProgramException = towelReuseProgramException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterSavingShowers")
    public Boolean waterSavingShowers;
    public WaterConservation withWaterSavingShowers(Boolean waterSavingShowers) {
        this.waterSavingShowers = waterSavingShowers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterSavingShowersException")
    public WaterConservationWaterSavingShowersExceptionEnum waterSavingShowersException;
    public WaterConservation withWaterSavingShowersException(WaterConservationWaterSavingShowersExceptionEnum waterSavingShowersException) {
        this.waterSavingShowersException = waterSavingShowersException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterSavingSinks")
    public Boolean waterSavingSinks;
    public WaterConservation withWaterSavingSinks(Boolean waterSavingSinks) {
        this.waterSavingSinks = waterSavingSinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterSavingSinksException")
    public WaterConservationWaterSavingSinksExceptionEnum waterSavingSinksException;
    public WaterConservation withWaterSavingSinksException(WaterConservationWaterSavingSinksExceptionEnum waterSavingSinksException) {
        this.waterSavingSinksException = waterSavingSinksException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterSavingToilets")
    public Boolean waterSavingToilets;
    public WaterConservation withWaterSavingToilets(Boolean waterSavingToilets) {
        this.waterSavingToilets = waterSavingToilets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterSavingToiletsException")
    public WaterConservationWaterSavingToiletsExceptionEnum waterSavingToiletsException;
    public WaterConservation withWaterSavingToiletsException(WaterConservationWaterSavingToiletsExceptionEnum waterSavingToiletsException) {
        this.waterSavingToiletsException = waterSavingToiletsException;
        return this;
    }
}