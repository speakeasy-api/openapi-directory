package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdVersionsVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public PostAppsAppIdVersionsVersionPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public PostAppsAppIdVersionsVersionPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}