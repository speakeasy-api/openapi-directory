package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05LinksLinkOnConfirmHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostV05LinksLinkOnConfirmHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}