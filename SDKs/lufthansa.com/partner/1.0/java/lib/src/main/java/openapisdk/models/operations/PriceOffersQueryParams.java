package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PriceOffersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departureDate")
    public String departureDate;
    public PriceOffersQueryParams withDepartureDate(String departureDate) {
        this.departureDate = departureDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=returnDate")
    public String returnDate;
    public PriceOffersQueryParams withReturnDate(String returnDate) {
        this.returnDate = returnDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=service")
    public String service;
    public PriceOffersQueryParams withService(String service) {
        this.service = service;
        return this;
    }
}