package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthOnConfirmRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05UsersAuthOnConfirmRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientAuthConfirmResponse patientAuthConfirmResponse;
    public PostV05UsersAuthOnConfirmRequests withPatientAuthConfirmResponse(openapisdk.models.shared.PatientAuthConfirmResponse patientAuthConfirmResponse) {
        this.patientAuthConfirmResponse = patientAuthConfirmResponse;
        return this;
    }
}