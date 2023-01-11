package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05UsersAuthOnFetchModesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05UsersAuthOnFetchModesHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-HIP-ID")
    public String xHIPID;
    public PostV05UsersAuthOnFetchModesHeaders withXHipId(String xHIPID) {
        this.xHIPID = xHIPID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-HIU-ID")
    public String xHIUID;
    public PostV05UsersAuthOnFetchModesHeaders withXHiuId(String xHIUID) {
        this.xHIUID = xHIUID;
        return this;
    }
}