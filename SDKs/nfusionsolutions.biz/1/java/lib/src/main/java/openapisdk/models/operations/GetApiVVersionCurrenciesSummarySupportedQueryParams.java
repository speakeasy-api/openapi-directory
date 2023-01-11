package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionCurrenciesSummarySupportedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetApiVVersionCurrenciesSummarySupportedQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetApiVVersionCurrenciesSummarySupportedQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}