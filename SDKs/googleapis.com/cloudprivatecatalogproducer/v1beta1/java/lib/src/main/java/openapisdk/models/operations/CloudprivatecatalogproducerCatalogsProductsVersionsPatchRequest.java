package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest {
    public CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams pathParams;
    public CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest withPathParams(CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams queryParams;
    public CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest withQueryParams(CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Version request;
    public CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest withRequest(openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Version request) {
        this.request = request;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity security;
    public CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest withSecurity(CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity security) {
        this.security = security;
        return this;
    }
}