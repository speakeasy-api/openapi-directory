package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WebsecurityscannerProjectsScanConfigsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}