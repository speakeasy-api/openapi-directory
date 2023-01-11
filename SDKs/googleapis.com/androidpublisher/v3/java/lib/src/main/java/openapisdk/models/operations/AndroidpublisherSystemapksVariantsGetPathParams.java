package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherSystemapksVariantsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherSystemapksVariantsGetPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variantId")
    public Long variantId;
    public AndroidpublisherSystemapksVariantsGetPathParams withVariantId(Long variantId) {
        this.variantId = variantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionCode")
    public String versionCode;
    public AndroidpublisherSystemapksVariantsGetPathParams withVersionCode(String versionCode) {
        this.versionCode = versionCode;
        return this;
    }
}