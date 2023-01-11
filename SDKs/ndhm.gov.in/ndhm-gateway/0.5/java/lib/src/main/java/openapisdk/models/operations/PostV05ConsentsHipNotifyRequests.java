package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentsHipNotifyRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05ConsentsHipNotifyRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HipConsentNotification hipConsentNotification;
    public PostV05ConsentsHipNotifyRequests withHipConsentNotification(openapisdk.models.shared.HipConsentNotification hipConsentNotification) {
        this.hipConsentNotification = hipConsentNotification;
        return this;
    }
}