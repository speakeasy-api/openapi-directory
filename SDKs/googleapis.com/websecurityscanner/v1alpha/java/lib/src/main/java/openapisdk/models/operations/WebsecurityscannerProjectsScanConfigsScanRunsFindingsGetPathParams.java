package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}