package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthOnInitHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05UsersAuthOnInitHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-HIP-ID")
    public String xHIPID;
    public PostV05UsersAuthOnInitHeaders withXHipId(String xHIPID) {
        this.xHIPID = xHIPID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-HIU-ID")
    public String xHIUID;
    public PostV05UsersAuthOnInitHeaders withXHiuId(String xHIUID) {
        this.xHIUID = xHIUID;
        return this;
    }
}