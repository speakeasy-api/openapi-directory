package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesGoogleAdsLinksDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AnalyticsadminPropertiesGoogleAdsLinksDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}