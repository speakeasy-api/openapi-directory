package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05LinksLinkOnInitHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05LinksLinkOnInitHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}