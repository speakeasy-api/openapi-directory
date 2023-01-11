package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05PatientsSmsNotifyRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05PatientsSmsNotifyRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientSmsNotifcationRequest patientSMSNotifcationRequest;
    public PostV05PatientsSmsNotifyRequests withPatientSmsNotifcationRequest(openapisdk.models.shared.PatientSmsNotifcationRequest patientSMSNotifcationRequest) {
        this.patientSMSNotifcationRequest = patientSMSNotifcationRequest;
        return this;
    }
}