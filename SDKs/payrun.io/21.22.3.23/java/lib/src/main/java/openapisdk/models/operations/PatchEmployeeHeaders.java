package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchEmployeeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public PatchEmployeeHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public PatchEmployeeHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}