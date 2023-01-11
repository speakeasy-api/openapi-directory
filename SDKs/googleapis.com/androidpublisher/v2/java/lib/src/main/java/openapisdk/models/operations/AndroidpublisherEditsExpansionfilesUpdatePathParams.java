package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsExpansionfilesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apkVersionCode")
    public Long apkVersionCode;
    public AndroidpublisherEditsExpansionfilesUpdatePathParams withApkVersionCode(Long apkVersionCode) {
        this.apkVersionCode = apkVersionCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsExpansionfilesUpdatePathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=expansionFileType")
    public AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum expansionFileType;
    public AndroidpublisherEditsExpansionfilesUpdatePathParams withExpansionFileType(AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum expansionFileType) {
        this.expansionFileType = expansionFileType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsExpansionfilesUpdatePathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}