package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherSystemapksVariantsDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherSystemapksVariantsDownloadPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variantId")
    public Long variantId;
    public AndroidpublisherSystemapksVariantsDownloadPathParams withVariantId(Long variantId) {
        this.variantId = variantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionCode")
    public String versionCode;
    public AndroidpublisherSystemapksVariantsDownloadPathParams withVersionCode(String versionCode) {
        this.versionCode = versionCode;
        return this;
    }
}