package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsSpotPerformanceAnnualPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetApiVVersionMetalsSpotPerformanceAnnualPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}