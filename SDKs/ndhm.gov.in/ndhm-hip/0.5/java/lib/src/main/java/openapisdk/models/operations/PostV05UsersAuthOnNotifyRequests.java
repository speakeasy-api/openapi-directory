package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthOnNotifyRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05UsersAuthOnNotifyRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientAuthNotificationAcknowledgement patientAuthNotificationAcknowledgement;
    public PostV05UsersAuthOnNotifyRequests withPatientAuthNotificationAcknowledgement(openapisdk.models.shared.PatientAuthNotificationAcknowledgement patientAuthNotificationAcknowledgement) {
        this.patientAuthNotificationAcknowledgement = patientAuthNotificationAcknowledgement;
        return this;
    }
}