package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdVersionsVersionStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public PostAppsAppIdVersionsVersionStatusPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public Long version;
    public PostAppsAppIdVersionsVersionStatusPathParams withVersion(Long version) {
        this.version = version;
        return this;
    }
}