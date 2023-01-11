package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsSetIamPolicyRequest {
    public CloudprivatecatalogproducerCatalogsSetIamPolicyPathParams pathParams;
    public CloudprivatecatalogproducerCatalogsSetIamPolicyRequest withPathParams(CloudprivatecatalogproducerCatalogsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsSetIamPolicyQueryParams queryParams;
    public CloudprivatecatalogproducerCatalogsSetIamPolicyRequest withQueryParams(CloudprivatecatalogproducerCatalogsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIamV1SetIamPolicyRequest request;
    public CloudprivatecatalogproducerCatalogsSetIamPolicyRequest withRequest(openapisdk.models.shared.GoogleIamV1SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CloudprivatecatalogproducerCatalogsSetIamPolicySecurity security;
    public CloudprivatecatalogproducerCatalogsSetIamPolicyRequest withSecurity(CloudprivatecatalogproducerCatalogsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}