package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingMybookingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public BookingMybookingsQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=itineraryOrItemId")
    public String itineraryOrItemId;
    public BookingMybookingsQueryParams withItineraryOrItemId(String itineraryOrItemId) {
        this.itineraryOrItemId = itineraryOrItemId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=voucherKey")
    public String voucherKey;
    public BookingMybookingsQueryParams withVoucherKey(String voucherKey) {
        this.voucherKey = voucherKey;
        return this;
    }
}