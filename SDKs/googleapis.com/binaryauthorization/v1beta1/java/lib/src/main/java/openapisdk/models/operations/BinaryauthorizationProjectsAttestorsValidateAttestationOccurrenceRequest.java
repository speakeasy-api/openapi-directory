package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest {
    public BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams pathParams;
    public BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest withPathParams(BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams queryParams;
    public BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest withQueryParams(BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ValidateAttestationOccurrenceRequest request;
    public BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest withRequest(openapisdk.models.shared.ValidateAttestationOccurrenceRequest request) {
        this.request = request;
        return this;
    }
    public BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity security;
    public BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest withSecurity(BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity security) {
        this.security = security;
        return this;
    }
}