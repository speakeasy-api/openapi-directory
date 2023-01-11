package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionCurrenciesHistorySupportedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetApiVVersionCurrenciesHistorySupportedPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}