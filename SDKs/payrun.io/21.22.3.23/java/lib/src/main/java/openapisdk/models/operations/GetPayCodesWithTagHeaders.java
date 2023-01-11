package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayCodesWithTagHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetPayCodesWithTagHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetPayCodesWithTagHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}