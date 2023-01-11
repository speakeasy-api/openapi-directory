package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductPhotosHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public ProductPhotosHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}