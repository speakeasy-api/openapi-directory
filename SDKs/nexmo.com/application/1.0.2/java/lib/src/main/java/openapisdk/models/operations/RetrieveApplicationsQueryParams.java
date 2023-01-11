package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveApplicationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public RetrieveApplicationsQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_secret")
    public String apiSecret;
    public RetrieveApplicationsQueryParams withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_index")
    public Long pageIndex;
    public RetrieveApplicationsQueryParams withPageIndex(Long pageIndex) {
        this.pageIndex = pageIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public RetrieveApplicationsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}