package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityInboundSsoAssignmentsCreateRequest {
    public CloudidentityInboundSsoAssignmentsCreateQueryParams queryParams;
    public CloudidentityInboundSsoAssignmentsCreateRequest withQueryParams(CloudidentityInboundSsoAssignmentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InboundSsoAssignmentInput request;
    public CloudidentityInboundSsoAssignmentsCreateRequest withRequest(openapisdk.models.shared.InboundSsoAssignmentInput request) {
        this.request = request;
        return this;
    }
    public CloudidentityInboundSsoAssignmentsCreateSecurity security;
    public CloudidentityInboundSsoAssignmentsCreateRequest withSecurity(CloudidentityInboundSsoAssignmentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}