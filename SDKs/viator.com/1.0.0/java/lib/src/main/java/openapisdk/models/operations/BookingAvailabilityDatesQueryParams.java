package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingAvailabilityDatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=productCode")
    public String productCode;
    public BookingAvailabilityDatesQueryParams withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
}