package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsSpotRatioHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetApiVVersionMetalsSpotRatioHistoryPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}