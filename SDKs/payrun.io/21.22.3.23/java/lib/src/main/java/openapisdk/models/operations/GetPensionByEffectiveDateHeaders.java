package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPensionByEffectiveDateHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetPensionByEffectiveDateHeaders withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetPensionByEffectiveDateHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}