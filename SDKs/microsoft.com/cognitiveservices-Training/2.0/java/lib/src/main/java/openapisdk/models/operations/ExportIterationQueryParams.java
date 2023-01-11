package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportIterationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=flavor")
    public String flavor;
    public ExportIterationQueryParams withFlavor(String flavor) {
        this.flavor = flavor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=platform")
    public String platform;
    public ExportIterationQueryParams withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
}