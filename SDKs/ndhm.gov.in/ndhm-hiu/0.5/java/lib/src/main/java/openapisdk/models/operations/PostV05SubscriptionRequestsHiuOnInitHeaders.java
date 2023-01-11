package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05SubscriptionRequestsHiuOnInitHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05SubscriptionRequestsHiuOnInitHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-HIU-ID")
    public String xHIUID;
    public PostV05SubscriptionRequestsHiuOnInitHeaders withXHiuId(String xHIUID) {
        this.xHIUID = xHIUID;
        return this;
    }
}