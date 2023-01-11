package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsDeobfuscationfilesUploadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apkVersionCode")
    public Long apkVersionCode;
    public AndroidpublisherEditsDeobfuscationfilesUploadPathParams withApkVersionCode(Long apkVersionCode) {
        this.apkVersionCode = apkVersionCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deobfuscationFileType")
    public AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum deobfuscationFileType;
    public AndroidpublisherEditsDeobfuscationfilesUploadPathParams withDeobfuscationFileType(AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum deobfuscationFileType) {
        this.deobfuscationFileType = deobfuscationFileType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsDeobfuscationfilesUploadPathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsDeobfuscationfilesUploadPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}