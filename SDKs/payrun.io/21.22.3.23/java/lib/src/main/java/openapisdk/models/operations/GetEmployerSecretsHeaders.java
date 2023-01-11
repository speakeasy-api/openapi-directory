package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmployerSecretsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetEmployerSecretsHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetEmployerSecretsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}