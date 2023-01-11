package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionCurrenciesHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetApiVVersionCurrenciesHistoryPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}