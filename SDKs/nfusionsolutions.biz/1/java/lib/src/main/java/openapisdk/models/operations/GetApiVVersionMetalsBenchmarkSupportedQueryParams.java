package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsBenchmarkSupportedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetApiVVersionMetalsBenchmarkSupportedQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetApiVVersionMetalsBenchmarkSupportedQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}