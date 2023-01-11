package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityInboundSsoAssignmentsPatchRequest {
    public CloudidentityInboundSsoAssignmentsPatchPathParams pathParams;
    public CloudidentityInboundSsoAssignmentsPatchRequest withPathParams(CloudidentityInboundSsoAssignmentsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityInboundSsoAssignmentsPatchQueryParams queryParams;
    public CloudidentityInboundSsoAssignmentsPatchRequest withQueryParams(CloudidentityInboundSsoAssignmentsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InboundSsoAssignmentInput request;
    public CloudidentityInboundSsoAssignmentsPatchRequest withRequest(openapisdk.models.shared.InboundSsoAssignmentInput request) {
        this.request = request;
        return this;
    }
    public CloudidentityInboundSsoAssignmentsPatchSecurity security;
    public CloudidentityInboundSsoAssignmentsPatchRequest withSecurity(CloudidentityInboundSsoAssignmentsPatchSecurity security) {
        this.security = security;
        return this;
    }
}