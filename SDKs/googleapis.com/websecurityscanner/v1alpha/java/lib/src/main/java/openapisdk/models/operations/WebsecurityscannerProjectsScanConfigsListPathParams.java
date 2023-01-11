package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public WebsecurityscannerProjectsScanConfigsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}