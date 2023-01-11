package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhotoControllerGetPhotoDownloadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public Integer height;
    public PhotoControllerGetPhotoDownloadQueryParams withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=photoID")
    public String photoID;
    public PhotoControllerGetPhotoDownloadQueryParams withPhotoId(String photoID) {
        this.photoID = photoID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public PhotoControllerGetPhotoDownloadQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Integer width;
    public PhotoControllerGetPhotoDownloadQueryParams withWidth(Integer width) {
        this.width = width;
        return this;
    }
}