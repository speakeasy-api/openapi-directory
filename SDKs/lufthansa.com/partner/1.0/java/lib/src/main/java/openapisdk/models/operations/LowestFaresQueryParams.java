package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LowestFaresQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cabin-class")
    public String cabinClass;
    public LowestFaresQueryParams withCabinClass(String cabinClass) {
        this.cabinClass = cabinClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=catalogues")
    public String catalogues;
    public LowestFaresQueryParams withCatalogues(String catalogues) {
        this.catalogues = catalogues;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public LowestFaresQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destination")
    public String destination;
    public LowestFaresQueryParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fare-family")
    public String fareFamily;
    public LowestFaresQueryParams withFareFamily(String fareFamily) {
        this.fareFamily = fareFamily;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=origin")
    public String origin;
    public LowestFaresQueryParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=return-date")
    public String returnDate;
    public LowestFaresQueryParams withReturnDate(String returnDate) {
        this.returnDate = returnDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travel-date")
    public String travelDate;
    public LowestFaresQueryParams withTravelDate(String travelDate) {
        this.travelDate = travelDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travelers")
    public String travelers;
    public LowestFaresQueryParams withTravelers(String travelers) {
        this.travelers = travelers;
        return this;
    }
}