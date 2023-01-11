package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MerchantCancellationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public MerchantCancellationHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}