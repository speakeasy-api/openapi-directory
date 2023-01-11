package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest {
    public CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams pathParams;
    public CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest withPathParams(CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams queryParams;
    public CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest withQueryParams(CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest request;
    public CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest withRequest(openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest request) {
        this.request = request;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity security;
    public CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest withSecurity(CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity security) {
        this.security = security;
        return this;
    }
}