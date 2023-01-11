package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsScanRunsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public WebsecurityscannerProjectsScanConfigsScanRunsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}