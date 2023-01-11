package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsImagesDeleteallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsImagesDeleteallPathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=imageType")
    public AndroidpublisherEditsImagesDeleteallImageTypeEnum imageType;
    public AndroidpublisherEditsImagesDeleteallPathParams withImageType(AndroidpublisherEditsImagesDeleteallImageTypeEnum imageType) {
        this.imageType = imageType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=language")
    public String language;
    public AndroidpublisherEditsImagesDeleteallPathParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsImagesDeleteallPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}