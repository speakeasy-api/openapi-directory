package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05HealthInformationNotifyRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05HealthInformationNotifyRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HealthInformationNotification healthInformationNotification;
    public PostV05HealthInformationNotifyRequests withHealthInformationNotification(openapisdk.models.shared.HealthInformationNotification healthInformationNotification) {
        this.healthInformationNotification = healthInformationNotification;
        return this;
    }
}