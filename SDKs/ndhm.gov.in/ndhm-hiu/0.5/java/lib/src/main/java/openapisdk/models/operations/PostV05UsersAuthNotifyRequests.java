package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthNotifyRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05UsersAuthNotifyRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientAuthNotification patientAuthNotification;
    public PostV05UsersAuthNotifyRequests withPatientAuthNotification(openapisdk.models.shared.PatientAuthNotification patientAuthNotification) {
        this.patientAuthNotification = patientAuthNotification;
        return this;
    }
}