package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDpsMessagesFromEmployerHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetDpsMessagesFromEmployerHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetDpsMessagesFromEmployerHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}