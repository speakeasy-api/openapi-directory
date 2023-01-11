package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransformDefinitionsFromApplicationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetTransformDefinitionsFromApplicationHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetTransformDefinitionsFromApplicationHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}