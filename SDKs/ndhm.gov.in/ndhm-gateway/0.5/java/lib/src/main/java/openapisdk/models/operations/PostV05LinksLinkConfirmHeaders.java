package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05LinksLinkConfirmHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05LinksLinkConfirmHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-HIP-ID")
    public String xHIPID;
    public PostV05LinksLinkConfirmHeaders withXHipId(String xHIPID) {
        this.xHIPID = xHIPID;
        return this;
    }
}