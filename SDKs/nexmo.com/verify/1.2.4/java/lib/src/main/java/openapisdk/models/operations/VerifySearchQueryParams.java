package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifySearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public VerifySearchQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_secret")
    public String apiSecret;
    public VerifySearchQueryParams withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=request_id")
    public String requestId;
    public VerifySearchQueryParams withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=request_ids")
    public String[] requestIds;
    public VerifySearchQueryParams withRequestIds(String[] requestIds) {
        this.requestIds = requestIds;
        return this;
    }
}