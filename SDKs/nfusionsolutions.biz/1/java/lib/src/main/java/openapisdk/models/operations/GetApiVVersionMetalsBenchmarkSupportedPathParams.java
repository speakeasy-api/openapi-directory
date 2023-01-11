package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsBenchmarkSupportedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetApiVVersionMetalsBenchmarkSupportedPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}