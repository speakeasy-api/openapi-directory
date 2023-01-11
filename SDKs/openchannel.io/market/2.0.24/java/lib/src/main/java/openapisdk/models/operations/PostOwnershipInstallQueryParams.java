package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOwnershipInstallQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appId")
    public String appId;
    public PostOwnershipInstallQueryParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PostOwnershipInstallQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public PostOwnershipInstallQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modelId")
    public String modelId;
    public PostOwnershipInstallQueryParams withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public PostOwnershipInstallQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}