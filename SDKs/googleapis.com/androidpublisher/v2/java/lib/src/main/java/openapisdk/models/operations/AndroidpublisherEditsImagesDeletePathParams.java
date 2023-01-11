package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherEditsImagesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=editId")
    public String editId;
    public AndroidpublisherEditsImagesDeletePathParams withEditId(String editId) {
        this.editId = editId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=imageId")
    public String imageId;
    public AndroidpublisherEditsImagesDeletePathParams withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=imageType")
    public AndroidpublisherEditsImagesDeleteImageTypeEnum imageType;
    public AndroidpublisherEditsImagesDeletePathParams withImageType(AndroidpublisherEditsImagesDeleteImageTypeEnum imageType) {
        this.imageType = imageType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=language")
    public String language;
    public AndroidpublisherEditsImagesDeletePathParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherEditsImagesDeletePathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}