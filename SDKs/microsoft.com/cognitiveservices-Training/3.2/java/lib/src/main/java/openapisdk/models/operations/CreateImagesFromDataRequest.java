package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImagesFromDataRequest {
    public CreateImagesFromDataPathParams pathParams;
    public CreateImagesFromDataRequest withPathParams(CreateImagesFromDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateImagesFromDataQueryParams queryParams;
    public CreateImagesFromDataRequest withQueryParams(CreateImagesFromDataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CreateImagesFromDataRequestBody request;
    public CreateImagesFromDataRequest withRequest(CreateImagesFromDataRequestBody request) {
        this.request = request;
        return this;
    }
}