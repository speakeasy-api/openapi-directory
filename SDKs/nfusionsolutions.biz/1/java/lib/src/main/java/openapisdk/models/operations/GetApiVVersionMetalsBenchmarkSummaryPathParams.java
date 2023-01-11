package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsBenchmarkSummaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetApiVVersionMetalsBenchmarkSummaryPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}