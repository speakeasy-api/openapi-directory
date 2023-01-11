package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest {
    public CloudprivatecatalogproducerCatalogsProductsVersionsCreatePathParams pathParams;
    public CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest withPathParams(CloudprivatecatalogproducerCatalogsProductsVersionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams queryParams;
    public CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest withQueryParams(CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Version request;
    public CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Version request) {
        this.request = request;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity security;
    public CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest withSecurity(CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}