package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPayLineTagHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public PutPayLineTagHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PutPayLineTagHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}