package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherGeneratedapksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherGeneratedapksListPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionCode")
    public Long versionCode;
    public AndroidpublisherGeneratedapksListPathParams withVersionCode(Long versionCode) {
        this.versionCode = versionCode;
        return this;
    }
}