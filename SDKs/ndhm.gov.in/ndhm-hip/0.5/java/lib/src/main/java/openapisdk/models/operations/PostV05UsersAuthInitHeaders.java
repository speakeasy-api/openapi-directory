package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthInitHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05UsersAuthInitHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-CM-ID")
    public String xCMID;
    public PostV05UsersAuthInitHeaders withXCmId(String xCMID) {
        this.xCMID = xCMID;
        return this;
    }
}