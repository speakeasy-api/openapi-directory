package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthOnConfirmHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05UsersAuthOnConfirmHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-HIP-ID")
    public String xHIPID;
    public PostV05UsersAuthOnConfirmHeaders withXHipId(String xHIPID) {
        this.xHIPID = xHIPID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-HIU-ID")
    public String xHIUID;
    public PostV05UsersAuthOnConfirmHeaders withXHiuId(String xHIUID) {
        this.xHIUID = xHIUID;
        return this;
    }
}