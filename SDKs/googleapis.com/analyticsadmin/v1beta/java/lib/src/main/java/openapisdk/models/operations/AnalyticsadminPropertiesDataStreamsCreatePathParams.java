package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesDataStreamsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AnalyticsadminPropertiesDataStreamsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}