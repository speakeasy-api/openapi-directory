package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsSpotRatioSummaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetApiVVersionMetalsSpotRatioSummaryPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}