package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05PatientsSmsOnNotifyRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05PatientsSmsOnNotifyRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientSmsNotifcationResponse patientSMSNotifcationResponse;
    public PostV05PatientsSmsOnNotifyRequests withPatientSmsNotifcationResponse(openapisdk.models.shared.PatientSmsNotifcationResponse patientSMSNotifcationResponse) {
        this.patientSMSNotifcationResponse = patientSMSNotifcationResponse;
        return this;
    }
}