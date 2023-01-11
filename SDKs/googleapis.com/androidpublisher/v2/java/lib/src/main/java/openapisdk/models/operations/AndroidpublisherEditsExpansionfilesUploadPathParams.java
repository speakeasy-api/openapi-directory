package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsExpansionfilesUploadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apkVersionCode")
    public Long apkVersionCode;
    public AndroidpublisherEditsExpansionfilesUploadPathParams withApkVersionCode(Long apkVersionCode) {
        this.apkVersionCode = apkVersionCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsExpansionfilesUploadPathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=expansionFileType")
    public AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum expansionFileType;
    public AndroidpublisherEditsExpansionfilesUploadPathParams withExpansionFileType(AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum expansionFileType) {
        this.expansionFileType = expansionFileType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsExpansionfilesUploadPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}