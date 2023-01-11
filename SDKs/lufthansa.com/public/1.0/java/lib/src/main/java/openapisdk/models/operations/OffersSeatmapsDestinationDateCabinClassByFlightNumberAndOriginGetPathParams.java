package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cabinClass")
    public String cabinClass;
    public OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams withCabinClass(String cabinClass) {
        this.cabinClass = cabinClass;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=destination")
    public String destination;
    public OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=flightNumber")
    public String flightNumber;
    public OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams withFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=origin")
    public String origin;
    public OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
}