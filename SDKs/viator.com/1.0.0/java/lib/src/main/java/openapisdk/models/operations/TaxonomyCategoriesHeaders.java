package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaxonomyCategoriesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public TaxonomyCategoriesHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}