package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityInboundSamlSsoProfilesCreateRequest {
    public CloudidentityInboundSamlSsoProfilesCreateQueryParams queryParams;
    public CloudidentityInboundSamlSsoProfilesCreateRequest withQueryParams(CloudidentityInboundSamlSsoProfilesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InboundSamlSsoProfileInput request;
    public CloudidentityInboundSamlSsoProfilesCreateRequest withRequest(openapisdk.models.shared.InboundSamlSsoProfileInput request) {
        this.request = request;
        return this;
    }
    public CloudidentityInboundSamlSsoProfilesCreateSecurity security;
    public CloudidentityInboundSamlSsoProfilesCreateRequest withSecurity(CloudidentityInboundSamlSsoProfilesCreateSecurity security) {
        this.security = security;
        return this;
    }
}