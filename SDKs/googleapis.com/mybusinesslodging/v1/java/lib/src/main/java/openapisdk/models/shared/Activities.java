package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Activities
 * Amenities and features related to leisure and play.
**/
public class Activities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beachAccess")
    public Boolean beachAccess;
    public Activities withBeachAccess(Boolean beachAccess) {
        this.beachAccess = beachAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beachAccessException")
    public ActivitiesBeachAccessExceptionEnum beachAccessException;
    public Activities withBeachAccessException(ActivitiesBeachAccessExceptionEnum beachAccessException) {
        this.beachAccessException = beachAccessException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beachFront")
    public Boolean beachFront;
    public Activities withBeachFront(Boolean beachFront) {
        this.beachFront = beachFront;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beachFrontException")
    public ActivitiesBeachFrontExceptionEnum beachFrontException;
    public Activities withBeachFrontException(ActivitiesBeachFrontExceptionEnum beachFrontException) {
        this.beachFrontException = beachFrontException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bicycleRental")
    public Boolean bicycleRental;
    public Activities withBicycleRental(Boolean bicycleRental) {
        this.bicycleRental = bicycleRental;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bicycleRentalException")
    public ActivitiesBicycleRentalExceptionEnum bicycleRentalException;
    public Activities withBicycleRentalException(ActivitiesBicycleRentalExceptionEnum bicycleRentalException) {
        this.bicycleRentalException = bicycleRentalException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boutiqueStores")
    public Boolean boutiqueStores;
    public Activities withBoutiqueStores(Boolean boutiqueStores) {
        this.boutiqueStores = boutiqueStores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boutiqueStoresException")
    public ActivitiesBoutiqueStoresExceptionEnum boutiqueStoresException;
    public Activities withBoutiqueStoresException(ActivitiesBoutiqueStoresExceptionEnum boutiqueStoresException) {
        this.boutiqueStoresException = boutiqueStoresException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("casino")
    public Boolean casino;
    public Activities withCasino(Boolean casino) {
        this.casino = casino;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("casinoException")
    public ActivitiesCasinoExceptionEnum casinoException;
    public Activities withCasinoException(ActivitiesCasinoExceptionEnum casinoException) {
        this.casinoException = casinoException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeBicycleRental")
    public Boolean freeBicycleRental;
    public Activities withFreeBicycleRental(Boolean freeBicycleRental) {
        this.freeBicycleRental = freeBicycleRental;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeBicycleRentalException")
    public ActivitiesFreeBicycleRentalExceptionEnum freeBicycleRentalException;
    public Activities withFreeBicycleRentalException(ActivitiesFreeBicycleRentalExceptionEnum freeBicycleRentalException) {
        this.freeBicycleRentalException = freeBicycleRentalException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeWatercraftRental")
    public Boolean freeWatercraftRental;
    public Activities withFreeWatercraftRental(Boolean freeWatercraftRental) {
        this.freeWatercraftRental = freeWatercraftRental;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeWatercraftRentalException")
    public ActivitiesFreeWatercraftRentalExceptionEnum freeWatercraftRentalException;
    public Activities withFreeWatercraftRentalException(ActivitiesFreeWatercraftRentalExceptionEnum freeWatercraftRentalException) {
        this.freeWatercraftRentalException = freeWatercraftRentalException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gameRoom")
    public Boolean gameRoom;
    public Activities withGameRoom(Boolean gameRoom) {
        this.gameRoom = gameRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gameRoomException")
    public ActivitiesGameRoomExceptionEnum gameRoomException;
    public Activities withGameRoomException(ActivitiesGameRoomExceptionEnum gameRoomException) {
        this.gameRoomException = gameRoomException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("golf")
    public Boolean golf;
    public Activities withGolf(Boolean golf) {
        this.golf = golf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("golfException")
    public ActivitiesGolfExceptionEnum golfException;
    public Activities withGolfException(ActivitiesGolfExceptionEnum golfException) {
        this.golfException = golfException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("horsebackRiding")
    public Boolean horsebackRiding;
    public Activities withHorsebackRiding(Boolean horsebackRiding) {
        this.horsebackRiding = horsebackRiding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("horsebackRidingException")
    public ActivitiesHorsebackRidingExceptionEnum horsebackRidingException;
    public Activities withHorsebackRidingException(ActivitiesHorsebackRidingExceptionEnum horsebackRidingException) {
        this.horsebackRidingException = horsebackRidingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nightclub")
    public Boolean nightclub;
    public Activities withNightclub(Boolean nightclub) {
        this.nightclub = nightclub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nightclubException")
    public ActivitiesNightclubExceptionEnum nightclubException;
    public Activities withNightclubException(ActivitiesNightclubExceptionEnum nightclubException) {
        this.nightclubException = nightclubException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateBeach")
    public Boolean privateBeach;
    public Activities withPrivateBeach(Boolean privateBeach) {
        this.privateBeach = privateBeach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateBeachException")
    public ActivitiesPrivateBeachExceptionEnum privateBeachException;
    public Activities withPrivateBeachException(ActivitiesPrivateBeachExceptionEnum privateBeachException) {
        this.privateBeachException = privateBeachException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scuba")
    public Boolean scuba;
    public Activities withScuba(Boolean scuba) {
        this.scuba = scuba;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scubaException")
    public ActivitiesScubaExceptionEnum scubaException;
    public Activities withScubaException(ActivitiesScubaExceptionEnum scubaException) {
        this.scubaException = scubaException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snorkeling")
    public Boolean snorkeling;
    public Activities withSnorkeling(Boolean snorkeling) {
        this.snorkeling = snorkeling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snorkelingException")
    public ActivitiesSnorkelingExceptionEnum snorkelingException;
    public Activities withSnorkelingException(ActivitiesSnorkelingExceptionEnum snorkelingException) {
        this.snorkelingException = snorkelingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tennis")
    public Boolean tennis;
    public Activities withTennis(Boolean tennis) {
        this.tennis = tennis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tennisException")
    public ActivitiesTennisExceptionEnum tennisException;
    public Activities withTennisException(ActivitiesTennisExceptionEnum tennisException) {
        this.tennisException = tennisException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterSkiing")
    public Boolean waterSkiing;
    public Activities withWaterSkiing(Boolean waterSkiing) {
        this.waterSkiing = waterSkiing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterSkiingException")
    public ActivitiesWaterSkiingExceptionEnum waterSkiingException;
    public Activities withWaterSkiingException(ActivitiesWaterSkiingExceptionEnum waterSkiingException) {
        this.waterSkiingException = waterSkiingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watercraftRental")
    public Boolean watercraftRental;
    public Activities withWatercraftRental(Boolean watercraftRental) {
        this.watercraftRental = watercraftRental;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watercraftRentalException")
    public ActivitiesWatercraftRentalExceptionEnum watercraftRentalException;
    public Activities withWatercraftRentalException(ActivitiesWatercraftRentalExceptionEnum watercraftRentalException) {
        this.watercraftRentalException = watercraftRentalException;
        return this;
    }
}