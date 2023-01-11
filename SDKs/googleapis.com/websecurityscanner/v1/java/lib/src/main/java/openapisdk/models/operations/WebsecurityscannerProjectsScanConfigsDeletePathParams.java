package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WebsecurityscannerProjectsScanConfigsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}