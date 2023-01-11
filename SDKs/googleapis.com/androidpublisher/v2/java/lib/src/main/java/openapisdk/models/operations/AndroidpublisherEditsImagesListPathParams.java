package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsImagesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsImagesListPathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=imageType")
    public AndroidpublisherEditsImagesListImageTypeEnum imageType;
    public AndroidpublisherEditsImagesListPathParams withImageType(AndroidpublisherEditsImagesListImageTypeEnum imageType) {
        this.imageType = imageType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=language")
    public String language;
    public AndroidpublisherEditsImagesListPathParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsImagesListPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}