package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LivingAreaFeatures
 * Features in the living area.
**/
public class LivingAreaFeatures {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("airConditioning")
    public Boolean airConditioning;
    public LivingAreaFeatures withAirConditioning(Boolean airConditioning) {
        this.airConditioning = airConditioning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("airConditioningException")
    public LivingAreaFeaturesAirConditioningExceptionEnum airConditioningException;
    public LivingAreaFeatures withAirConditioningException(LivingAreaFeaturesAirConditioningExceptionEnum airConditioningException) {
        this.airConditioningException = airConditioningException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bathtub")
    public Boolean bathtub;
    public LivingAreaFeatures withBathtub(Boolean bathtub) {
        this.bathtub = bathtub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bathtubException")
    public LivingAreaFeaturesBathtubExceptionEnum bathtubException;
    public LivingAreaFeatures withBathtubException(LivingAreaFeaturesBathtubExceptionEnum bathtubException) {
        this.bathtubException = bathtubException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidet")
    public Boolean bidet;
    public LivingAreaFeatures withBidet(Boolean bidet) {
        this.bidet = bidet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidetException")
    public LivingAreaFeaturesBidetExceptionEnum bidetException;
    public LivingAreaFeatures withBidetException(LivingAreaFeaturesBidetExceptionEnum bidetException) {
        this.bidetException = bidetException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dryer")
    public Boolean dryer;
    public LivingAreaFeatures withDryer(Boolean dryer) {
        this.dryer = dryer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dryerException")
    public LivingAreaFeaturesDryerExceptionEnum dryerException;
    public LivingAreaFeatures withDryerException(LivingAreaFeaturesDryerExceptionEnum dryerException) {
        this.dryerException = dryerException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("electronicRoomKey")
    public Boolean electronicRoomKey;
    public LivingAreaFeatures withElectronicRoomKey(Boolean electronicRoomKey) {
        this.electronicRoomKey = electronicRoomKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("electronicRoomKeyException")
    public LivingAreaFeaturesElectronicRoomKeyExceptionEnum electronicRoomKeyException;
    public LivingAreaFeatures withElectronicRoomKeyException(LivingAreaFeaturesElectronicRoomKeyExceptionEnum electronicRoomKeyException) {
        this.electronicRoomKeyException = electronicRoomKeyException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fireplace")
    public Boolean fireplace;
    public LivingAreaFeatures withFireplace(Boolean fireplace) {
        this.fireplace = fireplace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fireplaceException")
    public LivingAreaFeaturesFireplaceExceptionEnum fireplaceException;
    public LivingAreaFeatures withFireplaceException(LivingAreaFeaturesFireplaceExceptionEnum fireplaceException) {
        this.fireplaceException = fireplaceException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hairdryer")
    public Boolean hairdryer;
    public LivingAreaFeatures withHairdryer(Boolean hairdryer) {
        this.hairdryer = hairdryer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hairdryerException")
    public LivingAreaFeaturesHairdryerExceptionEnum hairdryerException;
    public LivingAreaFeatures withHairdryerException(LivingAreaFeaturesHairdryerExceptionEnum hairdryerException) {
        this.hairdryerException = hairdryerException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heating")
    public Boolean heating;
    public LivingAreaFeatures withHeating(Boolean heating) {
        this.heating = heating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heatingException")
    public LivingAreaFeaturesHeatingExceptionEnum heatingException;
    public LivingAreaFeatures withHeatingException(LivingAreaFeaturesHeatingExceptionEnum heatingException) {
        this.heatingException = heatingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inunitSafe")
    public Boolean inunitSafe;
    public LivingAreaFeatures withInunitSafe(Boolean inunitSafe) {
        this.inunitSafe = inunitSafe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inunitSafeException")
    public LivingAreaFeaturesInunitSafeExceptionEnum inunitSafeException;
    public LivingAreaFeatures withInunitSafeException(LivingAreaFeaturesInunitSafeExceptionEnum inunitSafeException) {
        this.inunitSafeException = inunitSafeException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inunitWifiAvailable")
    public Boolean inunitWifiAvailable;
    public LivingAreaFeatures withInunitWifiAvailable(Boolean inunitWifiAvailable) {
        this.inunitWifiAvailable = inunitWifiAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inunitWifiAvailableException")
    public LivingAreaFeaturesInunitWifiAvailableExceptionEnum inunitWifiAvailableException;
    public LivingAreaFeatures withInunitWifiAvailableException(LivingAreaFeaturesInunitWifiAvailableExceptionEnum inunitWifiAvailableException) {
        this.inunitWifiAvailableException = inunitWifiAvailableException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ironingEquipment")
    public Boolean ironingEquipment;
    public LivingAreaFeatures withIroningEquipment(Boolean ironingEquipment) {
        this.ironingEquipment = ironingEquipment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ironingEquipmentException")
    public LivingAreaFeaturesIroningEquipmentExceptionEnum ironingEquipmentException;
    public LivingAreaFeatures withIroningEquipmentException(LivingAreaFeaturesIroningEquipmentExceptionEnum ironingEquipmentException) {
        this.ironingEquipmentException = ironingEquipmentException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payPerViewMovies")
    public Boolean payPerViewMovies;
    public LivingAreaFeatures withPayPerViewMovies(Boolean payPerViewMovies) {
        this.payPerViewMovies = payPerViewMovies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payPerViewMoviesException")
    public LivingAreaFeaturesPayPerViewMoviesExceptionEnum payPerViewMoviesException;
    public LivingAreaFeatures withPayPerViewMoviesException(LivingAreaFeaturesPayPerViewMoviesExceptionEnum payPerViewMoviesException) {
        this.payPerViewMoviesException = payPerViewMoviesException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateBathroom")
    public Boolean privateBathroom;
    public LivingAreaFeatures withPrivateBathroom(Boolean privateBathroom) {
        this.privateBathroom = privateBathroom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateBathroomException")
    public LivingAreaFeaturesPrivateBathroomExceptionEnum privateBathroomException;
    public LivingAreaFeatures withPrivateBathroomException(LivingAreaFeaturesPrivateBathroomExceptionEnum privateBathroomException) {
        this.privateBathroomException = privateBathroomException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shower")
    public Boolean shower;
    public LivingAreaFeatures withShower(Boolean shower) {
        this.shower = shower;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showerException")
    public LivingAreaFeaturesShowerExceptionEnum showerException;
    public LivingAreaFeatures withShowerException(LivingAreaFeaturesShowerExceptionEnum showerException) {
        this.showerException = showerException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toilet")
    public Boolean toilet;
    public LivingAreaFeatures withToilet(Boolean toilet) {
        this.toilet = toilet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toiletException")
    public LivingAreaFeaturesToiletExceptionEnum toiletException;
    public LivingAreaFeatures withToiletException(LivingAreaFeaturesToiletExceptionEnum toiletException) {
        this.toiletException = toiletException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tv")
    public Boolean tv;
    public LivingAreaFeatures withTv(Boolean tv) {
        this.tv = tv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tvCasting")
    public Boolean tvCasting;
    public LivingAreaFeatures withTvCasting(Boolean tvCasting) {
        this.tvCasting = tvCasting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tvCastingException")
    public LivingAreaFeaturesTvCastingExceptionEnum tvCastingException;
    public LivingAreaFeatures withTvCastingException(LivingAreaFeaturesTvCastingExceptionEnum tvCastingException) {
        this.tvCastingException = tvCastingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tvException")
    public LivingAreaFeaturesTvExceptionEnum tvException;
    public LivingAreaFeatures withTvException(LivingAreaFeaturesTvExceptionEnum tvException) {
        this.tvException = tvException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tvStreaming")
    public Boolean tvStreaming;
    public LivingAreaFeatures withTvStreaming(Boolean tvStreaming) {
        this.tvStreaming = tvStreaming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tvStreamingException")
    public LivingAreaFeaturesTvStreamingExceptionEnum tvStreamingException;
    public LivingAreaFeatures withTvStreamingException(LivingAreaFeaturesTvStreamingExceptionEnum tvStreamingException) {
        this.tvStreamingException = tvStreamingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("universalPowerAdapters")
    public Boolean universalPowerAdapters;
    public LivingAreaFeatures withUniversalPowerAdapters(Boolean universalPowerAdapters) {
        this.universalPowerAdapters = universalPowerAdapters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("universalPowerAdaptersException")
    public LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum universalPowerAdaptersException;
    public LivingAreaFeatures withUniversalPowerAdaptersException(LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum universalPowerAdaptersException) {
        this.universalPowerAdaptersException = universalPowerAdaptersException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("washer")
    public Boolean washer;
    public LivingAreaFeatures withWasher(Boolean washer) {
        this.washer = washer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("washerException")
    public LivingAreaFeaturesWasherExceptionEnum washerException;
    public LivingAreaFeatures withWasherException(LivingAreaFeaturesWasherExceptionEnum washerException) {
        this.washerException = washerException;
        return this;
    }
}