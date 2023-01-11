package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentRequestsInitHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05ConsentRequestsInitHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}