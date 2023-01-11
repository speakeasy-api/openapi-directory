package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest {
    public CloudprivatecatalogproducerCatalogsTestIamPermissionsPathParams pathParams;
    public CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest withPathParams(CloudprivatecatalogproducerCatalogsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsTestIamPermissionsQueryParams queryParams;
    public CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest withQueryParams(CloudprivatecatalogproducerCatalogsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIamV1TestIamPermissionsRequest request;
    public CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest withRequest(openapisdk.models.shared.GoogleIamV1TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsTestIamPermissionsSecurity security;
    public CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest withSecurity(CloudprivatecatalogproducerCatalogsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}