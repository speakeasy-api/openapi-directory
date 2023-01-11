package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05SubscriptionRequestsCmOnInitHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05SubscriptionRequestsCmOnInitHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-HIU-ID")
    public String xHIUID;
    public PostV05SubscriptionRequestsCmOnInitHeaders withXHiuId(String xHIUID) {
        this.xHIUID = xHIUID;
        return this;
    }
}