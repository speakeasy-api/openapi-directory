package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayInstructionFromEmployeeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetPayInstructionFromEmployeeHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetPayInstructionFromEmployeeHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}