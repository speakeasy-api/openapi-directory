package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05SubscriptionsHiuOnNotifyHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05SubscriptionsHiuOnNotifyHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}