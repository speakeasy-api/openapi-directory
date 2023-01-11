package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancellationReasonsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public CancellationReasonsHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}