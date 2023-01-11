package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentsHipOnNotifyRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05ConsentsHipOnNotifyRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HipConsentNotificationResponse hipConsentNotificationResponse;
    public PostV05ConsentsHipOnNotifyRequests withHipConsentNotificationResponse(openapisdk.models.shared.HipConsentNotificationResponse hipConsentNotificationResponse) {
        this.hipConsentNotificationResponse = hipConsentNotificationResponse;
        return this;
    }
}