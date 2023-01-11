package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeomarksGeomarkIdPointFileFormatExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileFormatExtension")
    public GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum fileFormatExtension;
    public GetGeomarksGeomarkIdPointFileFormatExtensionPathParams withFileFormatExtension(GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum fileFormatExtension) {
        this.fileFormatExtension = fileFormatExtension;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=geomarkId")
    public String geomarkId;
    public GetGeomarksGeomarkIdPointFileFormatExtensionPathParams withGeomarkId(String geomarkId) {
        this.geomarkId = geomarkId;
        return this;
    }
}