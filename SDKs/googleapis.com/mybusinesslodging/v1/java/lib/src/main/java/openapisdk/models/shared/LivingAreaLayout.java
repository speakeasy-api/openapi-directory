package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LivingAreaLayout
 * Information about the layout of the living area.
**/
public class LivingAreaLayout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balcony")
    public Boolean balcony;
    public LivingAreaLayout withBalcony(Boolean balcony) {
        this.balcony = balcony;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balconyException")
    public LivingAreaLayoutBalconyExceptionEnum balconyException;
    public LivingAreaLayout withBalconyException(LivingAreaLayoutBalconyExceptionEnum balconyException) {
        this.balconyException = balconyException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("livingAreaSqMeters")
    public Float livingAreaSqMeters;
    public LivingAreaLayout withLivingAreaSqMeters(Float livingAreaSqMeters) {
        this.livingAreaSqMeters = livingAreaSqMeters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("livingAreaSqMetersException")
    public LivingAreaLayoutLivingAreaSqMetersExceptionEnum livingAreaSqMetersException;
    public LivingAreaLayout withLivingAreaSqMetersException(LivingAreaLayoutLivingAreaSqMetersExceptionEnum livingAreaSqMetersException) {
        this.livingAreaSqMetersException = livingAreaSqMetersException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loft")
    public Boolean loft;
    public LivingAreaLayout withLoft(Boolean loft) {
        this.loft = loft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loftException")
    public LivingAreaLayoutLoftExceptionEnum loftException;
    public LivingAreaLayout withLoftException(LivingAreaLayoutLoftExceptionEnum loftException) {
        this.loftException = loftException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonSmoking")
    public Boolean nonSmoking;
    public LivingAreaLayout withNonSmoking(Boolean nonSmoking) {
        this.nonSmoking = nonSmoking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonSmokingException")
    public LivingAreaLayoutNonSmokingExceptionEnum nonSmokingException;
    public LivingAreaLayout withNonSmokingException(LivingAreaLayoutNonSmokingExceptionEnum nonSmokingException) {
        this.nonSmokingException = nonSmokingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patio")
    public Boolean patio;
    public LivingAreaLayout withPatio(Boolean patio) {
        this.patio = patio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patioException")
    public LivingAreaLayoutPatioExceptionEnum patioException;
    public LivingAreaLayout withPatioException(LivingAreaLayoutPatioExceptionEnum patioException) {
        this.patioException = patioException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stairs")
    public Boolean stairs;
    public LivingAreaLayout withStairs(Boolean stairs) {
        this.stairs = stairs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stairsException")
    public LivingAreaLayoutStairsExceptionEnum stairsException;
    public LivingAreaLayout withStairsException(LivingAreaLayoutStairsExceptionEnum stairsException) {
        this.stairsException = stairsException;
        return this;
    }
}