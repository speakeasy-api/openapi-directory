package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthConfirmRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05UsersAuthConfirmRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientAuthConfirmRequest patientAuthConfirmRequest;
    public PostV05UsersAuthConfirmRequests withPatientAuthConfirmRequest(openapisdk.models.shared.PatientAuthConfirmRequest patientAuthConfirmRequest) {
        this.patientAuthConfirmRequest = patientAuthConfirmRequest;
        return this;
    }
}