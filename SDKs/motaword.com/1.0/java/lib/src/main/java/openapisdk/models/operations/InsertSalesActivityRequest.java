package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InsertSalesActivityRequest {
    public InsertSalesActivityPathParams pathParams;
    public InsertSalesActivityRequest withPathParams(InsertSalesActivityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public InsertSalesActivityRequestBody request;
    public InsertSalesActivityRequest withRequest(InsertSalesActivityRequestBody request) {
        this.request = request;
        return this;
    }
}