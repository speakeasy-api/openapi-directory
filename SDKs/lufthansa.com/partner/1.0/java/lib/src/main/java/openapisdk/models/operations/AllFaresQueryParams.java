package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AllFaresQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cabin-class")
    public String cabinClass;
    public AllFaresQueryParams withCabinClass(String cabinClass) {
        this.cabinClass = cabinClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=catalogues")
    public String catalogues;
    public AllFaresQueryParams withCatalogues(String catalogues) {
        this.catalogues = catalogues;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destination")
    public String destination;
    public AllFaresQueryParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fare-family")
    public String fareFamily;
    public AllFaresQueryParams withFareFamily(String fareFamily) {
        this.fareFamily = fareFamily;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=origin")
    public String origin;
    public AllFaresQueryParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=return-date")
    public String returnDate;
    public AllFaresQueryParams withReturnDate(String returnDate) {
        this.returnDate = returnDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trackingid")
    public String trackingid;
    public AllFaresQueryParams withTrackingid(String trackingid) {
        this.trackingid = trackingid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travel-date")
    public String travelDate;
    public AllFaresQueryParams withTravelDate(String travelDate) {
        this.travelDate = travelDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travelers")
    public String travelers;
    public AllFaresQueryParams withTravelers(String travelers) {
        this.travelers = travelers;
        return this;
    }
}