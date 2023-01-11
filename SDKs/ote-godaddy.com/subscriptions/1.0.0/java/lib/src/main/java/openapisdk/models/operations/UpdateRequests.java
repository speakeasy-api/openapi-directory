package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public UpdateRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object subscriptionUpdate;
    public UpdateRequests withSubscriptionUpdate(Object subscriptionUpdate) {
        this.subscriptionUpdate = subscriptionUpdate;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public Object subscriptionUpdate1;
    public UpdateRequests withSubscriptionUpdate1(Object subscriptionUpdate1) {
        this.subscriptionUpdate1 = subscriptionUpdate1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public UpdateRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}