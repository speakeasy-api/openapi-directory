package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsImagesUploadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsImagesUploadPathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=imageType")
    public AndroidpublisherEditsImagesUploadImageTypeEnum imageType;
    public AndroidpublisherEditsImagesUploadPathParams withImageType(AndroidpublisherEditsImagesUploadImageTypeEnum imageType) {
        this.imageType = imageType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=language")
    public String language;
    public AndroidpublisherEditsImagesUploadPathParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsImagesUploadPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}