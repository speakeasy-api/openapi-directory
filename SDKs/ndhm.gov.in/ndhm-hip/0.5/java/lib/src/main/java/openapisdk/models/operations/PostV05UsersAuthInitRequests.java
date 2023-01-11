package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthInitRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05UsersAuthInitRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientAuthInitRequest patientAuthInitRequest;
    public PostV05UsersAuthInitRequests withPatientAuthInitRequest(openapisdk.models.shared.PatientAuthInitRequest patientAuthInitRequest) {
        this.patientAuthInitRequest = patientAuthInitRequest;
        return this;
    }
}