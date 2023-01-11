package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}