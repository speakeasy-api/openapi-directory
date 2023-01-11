package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyRequest {
    public ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyPathParams pathParams;
    public ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyRequest withPathParams(ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyQueryParams queryParams;
    public ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyRequest withQueryParams(ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicySecurity security;
    public ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyRequest withSecurity(ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}