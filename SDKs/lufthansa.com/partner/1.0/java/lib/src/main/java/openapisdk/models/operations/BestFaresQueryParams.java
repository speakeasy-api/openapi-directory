package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BestFaresQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cabin-class")
    public String cabinClass;
    public BestFaresQueryParams withCabinClass(String cabinClass) {
        this.cabinClass = cabinClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=catalogues")
    public String catalogues;
    public BestFaresQueryParams withCatalogues(String catalogues) {
        this.catalogues = catalogues;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public BestFaresQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destination")
    public String destination;
    public BestFaresQueryParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fare-family")
    public String fareFamily;
    public BestFaresQueryParams withFareFamily(String fareFamily) {
        this.fareFamily = fareFamily;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=origin")
    public String origin;
    public BestFaresQueryParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=range")
    public String range;
    public BestFaresQueryParams withRange(String range) {
        this.range = range;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trackingid")
    public String trackingid;
    public BestFaresQueryParams withTrackingid(String trackingid) {
        this.trackingid = trackingid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travel-date")
    public String travelDate;
    public BestFaresQueryParams withTravelDate(String travelDate) {
        this.travelDate = travelDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trip-duration")
    public String tripDuration;
    public BestFaresQueryParams withTripDuration(String tripDuration) {
        this.tripDuration = tripDuration;
        return this;
    }
}