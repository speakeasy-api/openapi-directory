package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Parking
 * Parking options at the property.
**/
public class Parking {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("electricCarChargingStations")
    public Boolean electricCarChargingStations;
    public Parking withElectricCarChargingStations(Boolean electricCarChargingStations) {
        this.electricCarChargingStations = electricCarChargingStations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("electricCarChargingStationsException")
    public ParkingElectricCarChargingStationsExceptionEnum electricCarChargingStationsException;
    public Parking withElectricCarChargingStationsException(ParkingElectricCarChargingStationsExceptionEnum electricCarChargingStationsException) {
        this.electricCarChargingStationsException = electricCarChargingStationsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeParking")
    public Boolean freeParking;
    public Parking withFreeParking(Boolean freeParking) {
        this.freeParking = freeParking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeParkingException")
    public ParkingFreeParkingExceptionEnum freeParkingException;
    public Parking withFreeParkingException(ParkingFreeParkingExceptionEnum freeParkingException) {
        this.freeParkingException = freeParkingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeSelfParking")
    public Boolean freeSelfParking;
    public Parking withFreeSelfParking(Boolean freeSelfParking) {
        this.freeSelfParking = freeSelfParking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeSelfParkingException")
    public ParkingFreeSelfParkingExceptionEnum freeSelfParkingException;
    public Parking withFreeSelfParkingException(ParkingFreeSelfParkingExceptionEnum freeSelfParkingException) {
        this.freeSelfParkingException = freeSelfParkingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeValetParking")
    public Boolean freeValetParking;
    public Parking withFreeValetParking(Boolean freeValetParking) {
        this.freeValetParking = freeValetParking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeValetParkingException")
    public ParkingFreeValetParkingExceptionEnum freeValetParkingException;
    public Parking withFreeValetParkingException(ParkingFreeValetParkingExceptionEnum freeValetParkingException) {
        this.freeValetParkingException = freeValetParkingException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parkingAvailable")
    public Boolean parkingAvailable;
    public Parking withParkingAvailable(Boolean parkingAvailable) {
        this.parkingAvailable = parkingAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parkingAvailableException")
    public ParkingParkingAvailableExceptionEnum parkingAvailableException;
    public Parking withParkingAvailableException(ParkingParkingAvailableExceptionEnum parkingAvailableException) {
        this.parkingAvailableException = parkingAvailableException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfParkingAvailable")
    public Boolean selfParkingAvailable;
    public Parking withSelfParkingAvailable(Boolean selfParkingAvailable) {
        this.selfParkingAvailable = selfParkingAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfParkingAvailableException")
    public ParkingSelfParkingAvailableExceptionEnum selfParkingAvailableException;
    public Parking withSelfParkingAvailableException(ParkingSelfParkingAvailableExceptionEnum selfParkingAvailableException) {
        this.selfParkingAvailableException = selfParkingAvailableException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valetParkingAvailable")
    public Boolean valetParkingAvailable;
    public Parking withValetParkingAvailable(Boolean valetParkingAvailable) {
        this.valetParkingAvailable = valetParkingAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valetParkingAvailableException")
    public ParkingValetParkingAvailableExceptionEnum valetParkingAvailableException;
    public Parking withValetParkingAvailableException(ParkingValetParkingAvailableExceptionEnum valetParkingAvailableException) {
        this.valetParkingAvailableException = valetParkingAvailableException;
        return this;
    }
}