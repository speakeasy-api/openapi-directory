package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingHotelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destId")
    public Long destId;
    public BookingHotelsQueryParams withDestId(Long destId) {
        this.destId = destId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=productCode")
    public String productCode;
    public BookingHotelsQueryParams withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
}