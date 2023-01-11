package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhotoControllerGetPhotoDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public PhotoControllerGetPhotoDownloadPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}