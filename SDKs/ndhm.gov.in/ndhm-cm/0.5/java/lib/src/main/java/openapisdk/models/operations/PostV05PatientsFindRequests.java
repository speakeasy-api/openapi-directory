package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05PatientsFindRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05PatientsFindRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientIdentificationRequest patientIdentificationRequest;
    public PostV05PatientsFindRequests withPatientIdentificationRequest(openapisdk.models.shared.PatientIdentificationRequest patientIdentificationRequest) {
        this.patientIdentificationRequest = patientIdentificationRequest;
        return this;
    }
}