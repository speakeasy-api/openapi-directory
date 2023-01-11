package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentsHipOnNotifyHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05ConsentsHipOnNotifyHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}