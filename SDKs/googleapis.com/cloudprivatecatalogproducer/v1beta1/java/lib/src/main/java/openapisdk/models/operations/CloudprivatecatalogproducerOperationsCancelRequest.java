package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerOperationsCancelRequest {
    public CloudprivatecatalogproducerOperationsCancelPathParams pathParams;
    public CloudprivatecatalogproducerOperationsCancelRequest withPathParams(CloudprivatecatalogproducerOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprivatecatalogproducerOperationsCancelQueryParams queryParams;
    public CloudprivatecatalogproducerOperationsCancelRequest withQueryParams(CloudprivatecatalogproducerOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudprivatecatalogproducerOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudprivatecatalogproducerOperationsCancelSecurity security;
    public CloudprivatecatalogproducerOperationsCancelRequest withSecurity(CloudprivatecatalogproducerOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}