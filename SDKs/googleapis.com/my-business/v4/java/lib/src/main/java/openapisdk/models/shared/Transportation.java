package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Transportation
 * Vehicles or vehicular services facilitated or owned by the property.
**/
public class Transportation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("airportShuttle")
    public Boolean airportShuttle;
    public Transportation withAirportShuttle(Boolean airportShuttle) {
        this.airportShuttle = airportShuttle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("airportShuttleException")
    public TransportationAirportShuttleExceptionEnum airportShuttleException;
    public Transportation withAirportShuttleException(TransportationAirportShuttleExceptionEnum airportShuttleException) {
        this.airportShuttleException = airportShuttleException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carRentalOnProperty")
    public Boolean carRentalOnProperty;
    public Transportation withCarRentalOnProperty(Boolean carRentalOnProperty) {
        this.carRentalOnProperty = carRentalOnProperty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carRentalOnPropertyException")
    public TransportationCarRentalOnPropertyExceptionEnum carRentalOnPropertyException;
    public Transportation withCarRentalOnPropertyException(TransportationCarRentalOnPropertyExceptionEnum carRentalOnPropertyException) {
        this.carRentalOnPropertyException = carRentalOnPropertyException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeAirportShuttle")
    public Boolean freeAirportShuttle;
    public Transportation withFreeAirportShuttle(Boolean freeAirportShuttle) {
        this.freeAirportShuttle = freeAirportShuttle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeAirportShuttleException")
    public TransportationFreeAirportShuttleExceptionEnum freeAirportShuttleException;
    public Transportation withFreeAirportShuttleException(TransportationFreeAirportShuttleExceptionEnum freeAirportShuttleException) {
        this.freeAirportShuttleException = freeAirportShuttleException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freePrivateCarService")
    public Boolean freePrivateCarService;
    public Transportation withFreePrivateCarService(Boolean freePrivateCarService) {
        this.freePrivateCarService = freePrivateCarService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freePrivateCarServiceException")
    public TransportationFreePrivateCarServiceExceptionEnum freePrivateCarServiceException;
    public Transportation withFreePrivateCarServiceException(TransportationFreePrivateCarServiceExceptionEnum freePrivateCarServiceException) {
        this.freePrivateCarServiceException = freePrivateCarServiceException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localShuttle")
    public Boolean localShuttle;
    public Transportation withLocalShuttle(Boolean localShuttle) {
        this.localShuttle = localShuttle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localShuttleException")
    public TransportationLocalShuttleExceptionEnum localShuttleException;
    public Transportation withLocalShuttleException(TransportationLocalShuttleExceptionEnum localShuttleException) {
        this.localShuttleException = localShuttleException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateCarService")
    public Boolean privateCarService;
    public Transportation withPrivateCarService(Boolean privateCarService) {
        this.privateCarService = privateCarService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateCarServiceException")
    public TransportationPrivateCarServiceExceptionEnum privateCarServiceException;
    public Transportation withPrivateCarServiceException(TransportationPrivateCarServiceExceptionEnum privateCarServiceException) {
        this.privateCarServiceException = privateCarServiceException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer")
    public Boolean transfer;
    public Transportation withTransfer(Boolean transfer) {
        this.transfer = transfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferException")
    public TransportationTransferExceptionEnum transferException;
    public Transportation withTransferException(TransportationTransferExceptionEnum transferException) {
        this.transferException = transferException;
        return this;
    }
}