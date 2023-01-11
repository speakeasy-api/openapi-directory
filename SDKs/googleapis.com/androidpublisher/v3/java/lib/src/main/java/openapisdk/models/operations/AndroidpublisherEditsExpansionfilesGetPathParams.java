package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsExpansionfilesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apkVersionCode")
    public Long apkVersionCode;
    public AndroidpublisherEditsExpansionfilesGetPathParams withApkVersionCode(Long apkVersionCode) {
        this.apkVersionCode = apkVersionCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsExpansionfilesGetPathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=expansionFileType")
    public AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum expansionFileType;
    public AndroidpublisherEditsExpansionfilesGetPathParams withExpansionFileType(AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum expansionFileType) {
        this.expansionFileType = expansionFileType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsExpansionfilesGetPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}