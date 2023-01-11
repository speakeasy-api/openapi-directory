package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthOnInitRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05UsersAuthOnInitRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientAuthInitResponse patientAuthInitResponse;
    public PostV05UsersAuthOnInitRequests withPatientAuthInitResponse(openapisdk.models.shared.PatientAuthInitResponse patientAuthInitResponse) {
        this.patientAuthInitResponse = patientAuthInitResponse;
        return this;
    }
}