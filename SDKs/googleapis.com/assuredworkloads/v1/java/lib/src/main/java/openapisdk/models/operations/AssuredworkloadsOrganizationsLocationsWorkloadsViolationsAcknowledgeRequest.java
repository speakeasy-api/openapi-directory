package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest {
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgePathParams pathParams;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest withPathParams(AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeQueryParams queryParams;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest withQueryParams(AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest request;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest withRequest(openapisdk.models.shared.GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest request) {
        this.request = request;
        return this;
    }
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeSecurity security;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest withSecurity(AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeSecurity security) {
        this.security = security;
        return this;
    }
}