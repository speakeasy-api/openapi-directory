package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebsecurityscannerProjectsScanConfigsScanRunsStopPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public WebsecurityscannerProjectsScanConfigsScanRunsStopPathParams withName(String name) {
        this.name = name;
        return this;
    }
}