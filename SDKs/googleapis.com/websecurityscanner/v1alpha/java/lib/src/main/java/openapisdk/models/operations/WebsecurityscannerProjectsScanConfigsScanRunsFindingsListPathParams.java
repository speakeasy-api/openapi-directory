package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsScanRunsFindingsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public WebsecurityscannerProjectsScanConfigsScanRunsFindingsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}