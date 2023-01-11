package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsApklistingsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apkVersionCode")
    public Long apkVersionCode;
    public AndroidpublisherEditsApklistingsUpdatePathParams withApkVersionCode(Long apkVersionCode) {
        this.apkVersionCode = apkVersionCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsApklistingsUpdatePathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=language")
    public String language;
    public AndroidpublisherEditsApklistingsUpdatePathParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsApklistingsUpdatePathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}