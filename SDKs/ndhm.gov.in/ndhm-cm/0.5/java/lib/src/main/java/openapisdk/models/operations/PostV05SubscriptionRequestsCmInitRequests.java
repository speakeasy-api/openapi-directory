package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05SubscriptionRequestsCmInitRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05SubscriptionRequestsCmInitRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionRequest subscriptionRequest;
    public PostV05SubscriptionRequestsCmInitRequests withSubscriptionRequest(openapisdk.models.shared.SubscriptionRequest subscriptionRequest) {
        this.subscriptionRequest = subscriptionRequest;
        return this;
    }
}