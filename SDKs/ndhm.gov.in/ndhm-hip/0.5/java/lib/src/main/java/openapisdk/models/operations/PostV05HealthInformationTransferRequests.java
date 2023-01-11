package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05HealthInformationTransferRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05HealthInformationTransferRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DataNotification dataNotification;
    public PostV05HealthInformationTransferRequests withDataNotification(openapisdk.models.shared.DataNotification dataNotification) {
        this.dataNotification = dataNotification;
        return this;
    }
}