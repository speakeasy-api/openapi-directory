package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public WebsecurityscannerProjectsScanConfigsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}