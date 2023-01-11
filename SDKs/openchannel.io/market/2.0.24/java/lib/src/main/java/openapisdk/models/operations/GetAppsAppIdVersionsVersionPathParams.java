package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsAppIdVersionsVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public GetAppsAppIdVersionsVersionPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public Long version;
    public GetAppsAppIdVersionsVersionPathParams withVersion(Long version) {
        this.version = version;
        return this;
    }
}