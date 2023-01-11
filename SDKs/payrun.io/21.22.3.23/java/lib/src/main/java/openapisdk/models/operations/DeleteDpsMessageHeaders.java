package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDpsMessageHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public DeleteDpsMessageHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public DeleteDpsMessageHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}