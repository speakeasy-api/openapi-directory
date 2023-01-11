package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDpsMessageHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public PostDpsMessageHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PostDpsMessageHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}