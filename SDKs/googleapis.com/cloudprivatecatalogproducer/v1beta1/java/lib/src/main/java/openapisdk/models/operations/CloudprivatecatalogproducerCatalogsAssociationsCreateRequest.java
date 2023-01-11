package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsAssociationsCreateRequest {
    public CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams pathParams;
    public CloudprivatecatalogproducerCatalogsAssociationsCreateRequest withPathParams(CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams queryParams;
    public CloudprivatecatalogproducerCatalogsAssociationsCreateRequest withQueryParams(CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest request;
    public CloudprivatecatalogproducerCatalogsAssociationsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest request) {
        this.request = request;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity security;
    public CloudprivatecatalogproducerCatalogsAssociationsCreateRequest withSecurity(CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}