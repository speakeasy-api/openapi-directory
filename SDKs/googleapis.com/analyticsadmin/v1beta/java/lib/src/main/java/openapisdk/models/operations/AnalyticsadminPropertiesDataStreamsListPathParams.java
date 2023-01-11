package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesDataStreamsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AnalyticsadminPropertiesDataStreamsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}