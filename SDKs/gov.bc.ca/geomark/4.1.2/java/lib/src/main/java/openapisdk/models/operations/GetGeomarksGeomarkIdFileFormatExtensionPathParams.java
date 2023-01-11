package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeomarksGeomarkIdFileFormatExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileFormatExtension")
    public GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum fileFormatExtension;
    public GetGeomarksGeomarkIdFileFormatExtensionPathParams withFileFormatExtension(GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum fileFormatExtension) {
        this.fileFormatExtension = fileFormatExtension;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=geomarkId")
    public String geomarkId;
    public GetGeomarksGeomarkIdFileFormatExtensionPathParams withGeomarkId(String geomarkId) {
        this.geomarkId = geomarkId;
        return this;
    }
}