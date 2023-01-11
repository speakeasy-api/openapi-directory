package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommentariesFromEmployeeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetCommentariesFromEmployeeHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetCommentariesFromEmployeeHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}