package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesGoogleAdsLinksCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AnalyticsadminPropertiesGoogleAdsLinksCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}