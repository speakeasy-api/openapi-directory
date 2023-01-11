package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmployerRevisionByNumberHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetEmployerRevisionByNumberHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetEmployerRevisionByNumberHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}