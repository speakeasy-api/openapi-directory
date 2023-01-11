package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsUndeleteRequest {
    public CloudprivatecatalogproducerCatalogsUndeletePathParams pathParams;
    public CloudprivatecatalogproducerCatalogsUndeleteRequest withPathParams(CloudprivatecatalogproducerCatalogsUndeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsUndeleteQueryParams queryParams;
    public CloudprivatecatalogproducerCatalogsUndeleteRequest withQueryParams(CloudprivatecatalogproducerCatalogsUndeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudprivatecatalogproducerCatalogsUndeleteRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsUndeleteSecurity security;
    public CloudprivatecatalogproducerCatalogsUndeleteRequest withSecurity(CloudprivatecatalogproducerCatalogsUndeleteSecurity security) {
        this.security = security;
        return this;
    }
}