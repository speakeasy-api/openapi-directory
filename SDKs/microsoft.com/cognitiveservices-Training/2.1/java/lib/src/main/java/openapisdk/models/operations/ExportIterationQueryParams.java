package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportIterationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=flavor")
    public ExportIterationFlavorEnum flavor;
    public ExportIterationQueryParams withFlavor(ExportIterationFlavorEnum flavor) {
        this.flavor = flavor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=platform")
    public ExportIterationPlatformEnum platform;
    public ExportIterationQueryParams withPlatform(ExportIterationPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
}