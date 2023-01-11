package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsCreateRequest {
    public CloudprivatecatalogproducerCatalogsCreateQueryParams queryParams;
    public CloudprivatecatalogproducerCatalogsCreateRequest withQueryParams(CloudprivatecatalogproducerCatalogsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Catalog request;
    public CloudprivatecatalogproducerCatalogsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1Catalog request) {
        this.request = request;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsCreateSecurity security;
    public CloudprivatecatalogproducerCatalogsCreateRequest withSecurity(CloudprivatecatalogproducerCatalogsCreateSecurity security) {
        this.security = security;
        return this;
    }
}