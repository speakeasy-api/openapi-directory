package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsExpansionfilesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apkVersionCode")
    public Long apkVersionCode;
    public AndroidpublisherEditsExpansionfilesPatchPathParams withApkVersionCode(Long apkVersionCode) {
        this.apkVersionCode = apkVersionCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsExpansionfilesPatchPathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=expansionFileType")
    public AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum expansionFileType;
    public AndroidpublisherEditsExpansionfilesPatchPathParams withExpansionFileType(AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum expansionFileType) {
        this.expansionFileType = expansionFileType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsExpansionfilesPatchPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}