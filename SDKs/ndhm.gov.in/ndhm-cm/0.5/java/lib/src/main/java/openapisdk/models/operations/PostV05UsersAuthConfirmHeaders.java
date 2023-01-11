package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthConfirmHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05UsersAuthConfirmHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}