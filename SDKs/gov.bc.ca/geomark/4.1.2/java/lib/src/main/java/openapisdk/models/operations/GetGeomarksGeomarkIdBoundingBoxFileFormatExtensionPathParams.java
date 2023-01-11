package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileFormatExtension")
    public GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum fileFormatExtension;
    public GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams withFileFormatExtension(GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum fileFormatExtension) {
        this.fileFormatExtension = fileFormatExtension;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=geomarkId")
    public String geomarkId;
    public GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams withGeomarkId(String geomarkId) {
        this.geomarkId = geomarkId;
        return this;
    }
}