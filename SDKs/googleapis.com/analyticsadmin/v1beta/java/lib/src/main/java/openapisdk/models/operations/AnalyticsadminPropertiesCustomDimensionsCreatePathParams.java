package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesCustomDimensionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AnalyticsadminPropertiesCustomDimensionsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}