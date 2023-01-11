package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsProductsCreateRequest {
    public CloudprivatecatalogproducerCatalogsProductsCreatePathParams pathParams;
    public CloudprivatecatalogproducerCatalogsProductsCreateRequest withPathParams(CloudprivatecatalogproducerCatalogsProductsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsProductsCreateQueryParams queryParams;
    public CloudprivatecatalogproducerCatalogsProductsCreateRequest withQueryParams(CloudprivatecatalogproducerCatalogsProductsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Product request;
    public CloudprivatecatalogproducerCatalogsProductsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Product request) {
        this.request = request;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsProductsCreateSecurity security;
    public CloudprivatecatalogproducerCatalogsProductsCreateRequest withSecurity(CloudprivatecatalogproducerCatalogsProductsCreateSecurity security) {
        this.security = security;
        return this;
    }
}