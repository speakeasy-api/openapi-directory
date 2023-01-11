package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingVoucherHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public BookingVoucherHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}