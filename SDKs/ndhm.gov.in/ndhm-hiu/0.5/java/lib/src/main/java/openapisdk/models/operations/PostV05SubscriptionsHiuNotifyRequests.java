package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05SubscriptionsHiuNotifyRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05SubscriptionsHiuNotifyRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HiuSubscriptionNotification hiuSubscriptionNotification;
    public PostV05SubscriptionsHiuNotifyRequests withHiuSubscriptionNotification(openapisdk.models.shared.HiuSubscriptionNotification hiuSubscriptionNotification) {
        this.hiuSubscriptionNotification = hiuSubscriptionNotification;
        return this;
    }
}