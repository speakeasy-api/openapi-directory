package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPayRunTagHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public PutPayRunTagHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PutPayRunTagHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}