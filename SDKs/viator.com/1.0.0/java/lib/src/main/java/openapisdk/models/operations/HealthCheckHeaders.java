package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HealthCheckHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public HealthCheckHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}