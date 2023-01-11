package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentRequestsStatusHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05ConsentRequestsStatusHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}