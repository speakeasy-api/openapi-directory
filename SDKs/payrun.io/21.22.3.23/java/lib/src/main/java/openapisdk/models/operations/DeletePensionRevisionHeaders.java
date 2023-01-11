package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePensionRevisionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public DeletePensionRevisionHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public DeletePensionRevisionHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}