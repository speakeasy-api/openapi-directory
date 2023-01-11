package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherSystemapksVariantsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherSystemapksVariantsListPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionCode")
    public String versionCode;
    public AndroidpublisherSystemapksVariantsListPathParams withVersionCode(String versionCode) {
        this.versionCode = versionCode;
        return this;
    }
}