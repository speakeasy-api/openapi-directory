package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsAttestorsCreateRequest {
    public BinaryauthorizationProjectsAttestorsCreatePathParams pathParams;
    public BinaryauthorizationProjectsAttestorsCreateRequest withPathParams(BinaryauthorizationProjectsAttestorsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BinaryauthorizationProjectsAttestorsCreateQueryParams queryParams;
    public BinaryauthorizationProjectsAttestorsCreateRequest withQueryParams(BinaryauthorizationProjectsAttestorsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AttestorInput request;
    public BinaryauthorizationProjectsAttestorsCreateRequest withRequest(openapisdk.models.shared.AttestorInput request) {
        this.request = request;
        return this;
    }
    public BinaryauthorizationProjectsAttestorsCreateSecurity security;
    public BinaryauthorizationProjectsAttestorsCreateRequest withSecurity(BinaryauthorizationProjectsAttestorsCreateSecurity security) {
        this.security = security;
        return this;
    }
}