package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesGoogleAdsLinksPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AnalyticsadminPropertiesGoogleAdsLinksPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}