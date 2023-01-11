package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsProductsCopyRequest {
    public CloudprivatecatalogproducerCatalogsProductsCopyPathParams pathParams;
    public CloudprivatecatalogproducerCatalogsProductsCopyRequest withPathParams(CloudprivatecatalogproducerCatalogsProductsCopyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsProductsCopyQueryParams queryParams;
    public CloudprivatecatalogproducerCatalogsProductsCopyRequest withQueryParams(CloudprivatecatalogproducerCatalogsProductsCopyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest request;
    public CloudprivatecatalogproducerCatalogsProductsCopyRequest withRequest(openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest request) {
        this.request = request;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsProductsCopySecurity security;
    public CloudprivatecatalogproducerCatalogsProductsCopyRequest withSecurity(CloudprivatecatalogproducerCatalogsProductsCopySecurity security) {
        this.security = security;
        return this;
    }
}