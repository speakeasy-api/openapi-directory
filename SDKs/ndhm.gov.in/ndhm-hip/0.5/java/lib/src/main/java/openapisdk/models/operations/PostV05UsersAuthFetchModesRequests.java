package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthFetchModesRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05UsersAuthFetchModesRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientAuthModeQueryRequest patientAuthModeQueryRequest;
    public PostV05UsersAuthFetchModesRequests withPatientAuthModeQueryRequest(openapisdk.models.shared.PatientAuthModeQueryRequest patientAuthModeQueryRequest) {
        this.patientAuthModeQueryRequest = patientAuthModeQueryRequest;
        return this;
    }
}