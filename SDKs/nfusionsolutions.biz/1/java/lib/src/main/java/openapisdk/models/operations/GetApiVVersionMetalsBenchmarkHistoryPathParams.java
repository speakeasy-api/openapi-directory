package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsBenchmarkHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetApiVVersionMetalsBenchmarkHistoryPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}