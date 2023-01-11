package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsAttestorsUpdateRequest {
    public BinaryauthorizationProjectsAttestorsUpdatePathParams pathParams;
    public BinaryauthorizationProjectsAttestorsUpdateRequest withPathParams(BinaryauthorizationProjectsAttestorsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BinaryauthorizationProjectsAttestorsUpdateQueryParams queryParams;
    public BinaryauthorizationProjectsAttestorsUpdateRequest withQueryParams(BinaryauthorizationProjectsAttestorsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AttestorInput request;
    public BinaryauthorizationProjectsAttestorsUpdateRequest withRequest(openapisdk.models.shared.AttestorInput request) {
        this.request = request;
        return this;
    }
    public BinaryauthorizationProjectsAttestorsUpdateSecurity security;
    public BinaryauthorizationProjectsAttestorsUpdateRequest withSecurity(BinaryauthorizationProjectsAttestorsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}