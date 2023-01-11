package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsApklistingsDeleteallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apkVersionCode")
    public Long apkVersionCode;
    public AndroidpublisherEditsApklistingsDeleteallPathParams withApkVersionCode(Long apkVersionCode) {
        this.apkVersionCode = apkVersionCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsApklistingsDeleteallPathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsApklistingsDeleteallPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}