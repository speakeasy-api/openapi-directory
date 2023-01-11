package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherSystemapksVariantsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherSystemapksVariantsCreatePathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionCode")
    public String versionCode;
    public AndroidpublisherSystemapksVariantsCreatePathParams withVersionCode(String versionCode) {
        this.versionCode = versionCode;
        return this;
    }
}