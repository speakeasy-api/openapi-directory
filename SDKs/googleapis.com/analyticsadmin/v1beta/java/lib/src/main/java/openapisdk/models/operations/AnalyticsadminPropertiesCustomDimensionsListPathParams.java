package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesCustomDimensionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AnalyticsadminPropertiesCustomDimensionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}