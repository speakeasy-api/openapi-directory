package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsSupportedCurrencyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetApiVVersionMetalsSupportedCurrencyPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}