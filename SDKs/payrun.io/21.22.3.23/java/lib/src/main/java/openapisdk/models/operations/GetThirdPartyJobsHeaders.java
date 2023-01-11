package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetThirdPartyJobsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetThirdPartyJobsHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetThirdPartyJobsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}