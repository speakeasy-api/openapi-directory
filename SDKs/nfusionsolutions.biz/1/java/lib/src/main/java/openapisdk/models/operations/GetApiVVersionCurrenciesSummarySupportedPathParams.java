package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionCurrenciesSummarySupportedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetApiVVersionCurrenciesSummarySupportedPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}