package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingPastbookingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public BookingPastbookingQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=itemId")
    public String itemId;
    public BookingPastbookingQueryParams withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=voucherKey")
    public String voucherKey;
    public BookingPastbookingQueryParams withVoucherKey(String voucherKey) {
        this.voucherKey = voucherKey;
        return this;
    }
}