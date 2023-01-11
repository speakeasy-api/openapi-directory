package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsSpotRatioSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetApiVVersionMetalsSpotRatioSummaryQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pairs")
    public String pairs;
    public GetApiVVersionMetalsSpotRatioSummaryQueryParams withPairs(String pairs) {
        this.pairs = pairs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetApiVVersionMetalsSpotRatioSummaryQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}