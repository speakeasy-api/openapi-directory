package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthOnFetchModesRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05UsersAuthOnFetchModesRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientAuthModeQueryResponse patientAuthModeQueryResponse;
    public PostV05UsersAuthOnFetchModesRequests withPatientAuthModeQueryResponse(openapisdk.models.shared.PatientAuthModeQueryResponse patientAuthModeQueryResponse) {
        this.patientAuthModeQueryResponse = patientAuthModeQueryResponse;
        return this;
    }
}