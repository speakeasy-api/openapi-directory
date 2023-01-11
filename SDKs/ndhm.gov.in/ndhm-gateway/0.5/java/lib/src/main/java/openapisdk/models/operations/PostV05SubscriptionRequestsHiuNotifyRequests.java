package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05SubscriptionRequestsHiuNotifyRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05SubscriptionRequestsHiuNotifyRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionApprovalNotification subscriptionApprovalNotification;
    public PostV05SubscriptionRequestsHiuNotifyRequests withSubscriptionApprovalNotification(openapisdk.models.shared.SubscriptionApprovalNotification subscriptionApprovalNotification) {
        this.subscriptionApprovalNotification = subscriptionApprovalNotification;
        return this;
    }
}