package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionCurrenciesSummaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetApiVVersionCurrenciesSummaryPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}