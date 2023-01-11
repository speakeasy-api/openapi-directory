package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05PatientsOnFindRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05PatientsOnFindRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientIdentificationResponse patientIdentificationResponse;
    public PostV05PatientsOnFindRequests withPatientIdentificationResponse(openapisdk.models.shared.PatientIdentificationResponse patientIdentificationResponse) {
        this.patientIdentificationResponse = patientIdentificationResponse;
        return this;
    }
}